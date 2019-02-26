/**
 * @component transition.js
 * @description react navigation 动画
 * @time 2019/2/26
 * @author JUSTIN XU
 */
/* eslint-disable import/no-extraneous-dependencies */
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { Easing, Animated } from 'react-native';

// animate type
export const forHorizontal = 'forHorizontal';
export const forVertical = 'forVertical';
export const forFadeFromBottomAndroid = 'forFadeFromBottomAndroid';
export const forReverseHorizontal = 'forReverseHorizontal';
export const forReverseVertical = 'forReverseVertical';

export const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 375,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { position, layout, scene, index, scenes } = sceneProps;
      // Use default animate
      const { route } = scene;
      const params = route.params || {};
      if (params.transition) {
        return CardStackStyleInterpolator[params.transition](sceneProps);
      }

      const toIndex = index;
      const thisSceneIndex = scene.index;
      const {
        initHeight: height,
        initWidth: width,
      } = layout || {};

      // Use custom reverse animate
      if (params.reverseTransition) {
        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
          outputRange: [-width, 0, 0],
        });

        if (params.reverseTransition === forReverseHorizontal) {
          return { transform: [{ translateX }], overflow: 'hidden' };
        }
        const translateY = position.interpolate({
          inputRange: [0, thisSceneIndex],
          outputRange: [-height, 0],
        });

        if (params.reverseTransition === forReverseVertical) {
          return { transform: [{ translateY }], overflow: 'hidden' };
        }
      }

      // Use custom animate
      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0],
      });

      // Since we want the card to take the same amount of time
      // to animate downwards no matter if it's 3rd on the stack
      // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0],
      });

      const slideFromRight = { transform: [{ translateX }], overflow: 'hidden' };
      const slideFromBottom = { transform: [{ translateY }], overflow: 'hidden' };

      const lastSceneIndex = scenes[scenes.length - 1].index;

      // Test whether we're skipping back more than one screen
      // and slide from bottom if true
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return;
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return { opacity: 0 };
        // Slide top screen down
        return slideFromBottom;
      }
      // Otherwise slide from right
      return slideFromRight;
    },
  };
};
