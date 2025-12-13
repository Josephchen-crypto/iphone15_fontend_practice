import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animationWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      // 指定触发动画的元素
      // 当该元素进入或离开视口时，会触发动画的开始或结束
      trigger: target,

      // 定义动画在不同滚动阶段的行为
      // 格式："onEnter onLeave onEnterBack onLeaveBack"
      // "restart"：重新开始动画
      // "reverse"：反向播放动画
      // "restart reverse restart reverse"表示：
      // - 元素进入视口：重新开始动画
      // - 元素离开视口：反向播放动画
      // - 元素从下方重新进入视口：重新开始动画
      // - 元素从上方完全离开视口：反向播放动画
      toggleActions: "restart reverse restart reverse",

      // 定义动画开始的触发点
      // 格式："triggerElementPosition triggerScrollerPosition"
      // "top 80%"表示：
      // 当触发元素(trigger)的顶部(top)到达滚动容器(通常是窗口)的80%高度位置时，开始动画
      start: "top 90%",

      // 扩展其他滚动属性
      // 允许调用者传入额外的ScrollTrigger配置，如end、scrub、pin等
      // 例如在Features组件中传入了{ scrub: 5.5 }，表示动画会随滚动进度平滑播放
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  target1,
  target2,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  timeline.to(
    target1,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
  timeline.to(
    target2,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
