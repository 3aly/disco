import {t} from 'i18next';
import React, {useRef, useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';

import styles from './TopTabs.styles';
import {FlatList, View, Pressable, Text} from 'react-native';
import {colors} from '/constants/styles';
import {FilterScrollTabsProps} from 'types';

const FilterScrollTabs = ({
  Tabs,
  onPressFn = () => {},
  activeTab = 0,
  initialTab = 0,
}: FilterScrollTabsProps) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        onScrollToIndexFailed={err => {
          console.log(err);
        }}
        data={Tabs}
        showsHorizontalScrollIndicator={false}
        horizontal
        initialScrollIndex={initialTab}
        renderItem={({item: tab, index}) => {
          return (
            <Pressable
              onPress={() => {
                onPressFn(tab.name, tab.id);
              }}
              style={[styles.container]}>
              <View
                style={[
                  activeTab === tab.id ? styles.isPressed : {},
                  styles.tab,
                ]}>
                {activeTab === tab.id ? (
                  <Animatable.Text
                    animation="swing"
                    iterationCount={2}
                    style={[
                      styles.name,
                      {
                        color: activeTab === tab.id ? colors.blue : '',
                      },
                    ]}>
                    {tab.name}
                  </Animatable.Text>
                ) : (
                  <Text style={[styles.name]}>{tab.name}</Text>
                )}
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default FilterScrollTabs;
