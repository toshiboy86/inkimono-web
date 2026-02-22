## Switching Git Account Per-Repo Without Touching Global SSH Config

### Background

Two GitHub accounts were registered on the same machine: `fireisbornx` (personal) and `toshiboy86` (work). Both were authenticated via `gh auth` and had separate SSH keys:

```
~/.ssh/id_ed25519_fireisbornx   ← fireisbornx
~/.ssh/id_ed25519               ← toshiboy86
```

### Before

`~/.ssh/config` globally mapped all `github.com` connections to the `fireisbornx` key:

```ssh-config
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_fireisbornx
  IdentitiesOnly yes
```

The GitHub CLI also had `fireisbornx` set as the active account:

```
✓ Logged in to github.com account fireisbornx (keyring)  ← Active
✓ Logged in to github.com account toshiboy86 (keyring)
```

### The Issue

The repo's remote was using SSH:

```
origin  git@github.com:toshiboy86/inkimono-web.git
```

Every `git push` went through SSH, which always picked up the `fireisbornx` key from `~/.ssh/config` — regardless of which `gh` account was active. `gh auth switch` only affects the GitHub CLI session; it has no bearing on how SSH resolves identity. So pushing to a repo owned by `toshiboy86` was always rejected:

```
ERROR: Permission to toshiboy86/inkimono-web.git denied to fireisbornx.
fatal: Could not read from remote repository.
```

### After

Switch the active `gh` account, then change the repo's remote from SSH to HTTPS:

```bash
gh auth switch --user toshiboy86
git remote set-url origin https://github.com/toshiboy86/inkimono-web.git
git push origin feat-instagram-button
```

Over HTTPS, git delegates authentication to the `gh` credential helper instead of SSH. The credential helper serves the currently active `gh` account's token — `toshiboy86` — and the push succeeds.

The fix is scoped entirely to this repo's remote URL. The global `~/.ssh/config` and the other repo's SSH setup remain untouched.

### Key Takeaway

|                             | SSH remote               | HTTPS remote                                |
| --------------------------- | ------------------------ | ------------------------------------------- |
| Auth resolved by            | `~/.ssh/config` (global) | `gh` credential helper (per active account) |
| `gh auth switch` has effect | No                       | Yes                                         |
| Per-repo isolation          | Requires SSH host alias  | Just change the remote URL                  |

If you have multiple GitHub accounts on one machine and want per-repo account isolation without restructuring SSH config, switching the remote to HTTPS and managing accounts via `gh auth switch` is the simplest path.

---

### How `gh` Manages Multiple Accounts

`gh` stores each account's OAuth token separately in the system keyring. When you run `gh auth login` for a second account, it doesn't replace the first — it adds it alongside. At any time, one account is marked **active**.

```
✓ Logged in to github.com account toshiboy86 (keyring)  ← Active
✓ Logged in to github.com account fireisbornx (keyring)
```

All `gh` commands (PR, issue, API calls) run as the active account. Switching is instant and global to the CLI session:

```bash
gh auth switch --user fireisbornx   # switch to personal
gh auth switch --user toshiboy86    # switch to work
gh auth status                      # confirm active account
```

#### The Credential Helper

When `gh` is installed, it registers itself as a git credential helper for `github.com`. You can see this in your git config:

```bash
git config --global credential.https://github.com.helper
# → !/usr/local/bin/gh auth git-credential
```

This means any `git` operation over HTTPS on `github.com` asks `gh` for credentials. `gh` responds with the active account's token. No password prompt, no manual token management.

#### What `gh` Controls vs. What It Doesn't

| Scope | Controlled by `gh` | Not controlled by `gh` |
|---|---|---|
| `gh` CLI commands | Active account token | — |
| `git push` over HTTPS | Active account token via credential helper | — |
| `git push` over SSH | — | `~/.ssh/config` key mapping |
| Per-repo identity | — | `git config --local user.email` |

SSH authentication is entirely outside `gh`'s reach. If your remote uses `git@github.com:...`, `gh auth switch` is invisible to it.

---

### Tips for Multi-Account Setups

**1. Check which account will be used before pushing**

```bash
gh auth status
git remote -v
```

If the remote is SSH and the wrong account is active in SSH config, the push will fail regardless of `gh`.

**2. Use HTTPS remotes for accounts you switch between**

SSH is great for a single-account machine. For multi-account, HTTPS + `gh` credential helper gives you clean per-session control:

```bash
git remote set-url origin https://github.com/<username>/<repo>.git
```

**3. Set local git identity per repo**

`gh auth switch` doesn't change the commit author. Set it explicitly at the repo level so commits are attributed correctly:

```bash
git config --local user.name "toshiboy86"
git config --local user.email "your@work-email.com"
```

This overrides the global `~/.gitconfig` for that repo only.

**4. If you must use SSH for both accounts, use host aliases**

Add a second `Host` block in `~/.ssh/config` with a different alias:

```ssh-config
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_toshiboy86
  IdentitiesOnly yes
```

Then update the remote to use the alias:

```bash
git remote set-url origin git@github-work:toshiboy86/inkimono-web.git
```

Git resolves `github-work` via SSH config while leaving the default `github.com` entry for the other account intact.

**5. Verify the active account after switching machines or shell sessions**

`gh auth switch` persists in the keyring but it's worth confirming after a fresh terminal:

```bash
gh api user --jq '.login'
# → toshiboy86
```
