import {colors} from '/constants';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {px} from 'utils';
import styles from './styles';

const ExpenseItemSkeleton = () => {
  return (
    <SkeletonPlaceholder
      highlightColor={`${colors.red}`}
      backgroundColor={`${colors.blue}`}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent="space-between">
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item flexDirection="row">
            <SkeletonPlaceholder.Item
              width={px(28)}
              height={px(30)}
              borderRadius={px(5)}
              alignSelf="center"
            />
            <SkeletonPlaceholder.Item
              width={px(75)}
              alignSelf="center"
              height={px(22)}
              borderRadius={px(5)}
              marginHorizontal={px(12)}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          width={px(35)}
          height={px(22)}
          alignSelf="center"
          borderRadius={px(20)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ExpenseItemSkeleton;
