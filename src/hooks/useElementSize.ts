import { Ref, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

export default function useElementSize(deps?: any[]): [Ref<HTMLElement>, Size] {
  const ref = useRef<HTMLElement>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();

  //     console.log("width", rect.width, "height", rect.height);

  //     setSize({
  //       width: rect.width,
  //       height: rect.height,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (!ref.current) {
        return;
      }
      const height = ref.current.scrollHeight;
      const width = ref.current.scrollWidth;
      setSize({
        width: width, 
        height: height,
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, deps || []);

  return [ref, size];
}