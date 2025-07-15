import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { TreeNode as TreeNodeType } from '../types/BinaryTree';

interface TreeNodeProps {
  node: TreeNodeType;
  onPress?: (node: TreeNodeType) => void;
}

export const TreeNode: React.FC<TreeNodeProps> = ({ node, onPress }) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (node.isNew) {
      // Animate in new nodes
      scale.value = withSpring(1, { damping: 15, stiffness: 150 });
      opacity.value = withTiming(1, { duration: 500 });
      rotation.value = withSpring(360, { damping: 15, stiffness: 150 });
    } else if (node.isExpanding) {
      // Animate expanding nodes
      scale.value = withSpring(1.2, { damping: 10, stiffness: 200 });
      setTimeout(() => {
        scale.value = withSpring(1, { damping: 15, stiffness: 150 });
      }, 200);
    }
  }, [node.isNew, node.isExpanding]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotation.value}deg` },
      ],
      opacity: opacity.value,
    };
  });

  const getNodeColor = () => {
    if (node.isNew) return ['#4CAF50', '#45a049'];
    if (node.isExpanding) return ['#FF9800', '#F57C00'];
    if (node.level === 0) return ['#2196F3', '#1976D2'];
    return ['#9C27B0', '#7B1FA2'];
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          left: node.x - 25,
          top: node.y - 25,
        },
        animatedStyle,
      ]}
    >
      <LinearGradient
        colors={getNodeColor()}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.value}>{node.value}</Text>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 