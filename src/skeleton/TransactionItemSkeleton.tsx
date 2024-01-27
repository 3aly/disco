import {colors} from '/constants';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {px} from 'utils';

const TransactionItemSkeleton = () => {
  return (
    <SkeletonPlaceholder
      highlightColor={`${colors.lightBlue}`}
      backgroundColor={`${colors.blue}`}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        width={'100%'}
        justifyContent="space-between">
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item
            width={px(45)}
            height={px(45)}
            borderRadius={px(25)}
          />
          <SkeletonPlaceholder.Item marginTop={px(6)} marginHorizontal={px(12)}>
            <SkeletonPlaceholder.Item
              width={px(105)}
              height={px(10)}
              borderRadius={px(5)}
              marginVertical={px(2)}
            />
            <SkeletonPlaceholder.Item
              width={px(75)}
              height={px(10)}
              borderRadius={px(5)}
              marginVertical={px(1)}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          width={px(75)}
          height={px(18)}
          alignSelf={'flex-end'}
          marginBottom={px(10)}
          // marginEnd={px(10)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default TransactionItemSkeleton;
