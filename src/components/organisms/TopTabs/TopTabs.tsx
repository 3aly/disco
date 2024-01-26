import {t} from 'i18next';
import React, {useRef, useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';

import styles from './TopTabs.styles';
import {
  FlatList,
  Dimensions,
  Platform,
  I18nManager,
  View,
  Pressable,
  Text,
} from 'react-native';
import {colors} from '/constants/styles';

type ITap = {
  id: number;
  name: string;
};

type props = {
  Tabs: ITap[];
  onPressFn: Function;
  activeTab: number;
  initialTab?: number;
};

const FilterScrollTabs = ({
  Tabs,
  onPressFn = () => {},
  activeTab = 0,
  initialTab = 0,
}: props) => {
  const flatListRef = useRef<FlatList>(null);
  const [tabWidth, setTabWidth] = useState<string | number>('auto');
  const adjustScreenWidth = () => {
    const containerWidth = Dimensions.get('window').width;
    const calculatedWidth = containerWidth / Tabs.length;
    setTabWidth(calculatedWidth);
  };

  useEffect(() => {
    adjustScreenWidth();

    // if (Tabs?.length === 2) {
    //   adjustScreenWidth();
    // } else {
    //   setTabWidth("auto");
    // }
  }, [Tabs]);

  return (
    <View>
      <FlatList
        ref={flatListRef}
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
                flatListRef.current?.scrollToIndex({
                  animated: true,
                  index:
                    I18nManager.isRTL && Platform.OS === 'ios'
                      ? Tabs?.length - 1 - index
                      : index,
                  viewPosition: Platform.OS === 'ios' ? 1 : 0.5,
                });
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
                        color: activeTab === tab.id ? colors.primary : 'black',
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
