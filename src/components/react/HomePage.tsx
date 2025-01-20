import { useEffect, useMemo, useState, type MouseEvent } from "react";
import Menu from "./Menu"
import { twMerge } from "tailwind-merge";

type Props = {
  mainContent: React.ReactNode,
  footer: React.ReactNode
}

const backgroundBaseClass = "main-bg bg-neutral-50 dark:bg-gray-900 z-0";

// TODO: Is there a way to type this nicely using slots? Unsure.
export default function HomePage(props: any) {
  const { mainContent, footer } = props as unknown as Props;

  const [transitionTo, setTransitionTo] = useState<null | string>(null);
  
  const backgroundClassName = useMemo(() => {
    return transitionTo ? twMerge(backgroundBaseClass, 'navigating') : backgroundBaseClass;
  }, [transitionTo])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setTransitionTo(target);
  }

  useEffect(() => {
    if( transitionTo ) {
      setTimeout(() => {
        window.location.assign(transitionTo)
      }, 201)
    }
  }, [transitionTo])

  return (
    <div className="overflow-x-hidden relative min-h-screen grid grid-rows-[auto_1fr_auto]">
      <div className="pt-4 pb-8 relative z-10">
        <Menu className="w-[380px] lg:w-[760px]" onMenuItemClick={handleClick} />
      </div>
      <div className="relative">
        <div className={backgroundClassName}></div>
        {!transitionTo && mainContent}
      </div>
      {!transitionTo && footer}
    </div>
  )
}