import { TI18n } from '../src/entities';

const TopHeader = (props: { i18n: TI18n }) => {
  const { i18n } = props;
  return (
    <div
      className="relative flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[500px] lg:h-[600px]"
      style={{ backgroundImage: 'url(//www.inkimono.com/slider-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-[800px] text-center text-white">
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl md:p-8">
            <h1 className="mb-2 font-semibold text-[2rem] leading-[1.2] tracking-[-0.025em] md:text-[2.5rem] lg:text-[3rem]">
              {i18n['index']['top_title']}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
