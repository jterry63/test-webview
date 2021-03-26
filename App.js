import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default function App() {
  return (
    <WebView
    source={{
      uri: "https://widgets.moneydesktop.com/md/connect/7qdAcApfqyh8f8yhglyqktgjb2Zksrkq7A9l6hk4c9cfkr7s7pfyskg4gqr7tsm22tdAkl4xrvkvxf7xpwxfl5xv5hxdd9cb8fhwxh4xwAnkwj90q9p77w9xtmn148znnwmyrb1gx87107gxxktA8c75q28x9dqjlbkshr2znh418rzr360kv0k5k0fy3nqpdvhl8qfzpj4bpx2cl71Af8mhkwgbjxvhhjlfppr168lq1xf9q7zkxpw5ds2n7bl977bbp3dvwsr0gsy7bqrwA7gAwccfgh2dp39zv2xfxqmqltnjAbjv3fx30ghjgqplgcbr385wk5wzblpA4034b2ty9f1fq5h7lfAnxlx5/eyJpc19tb2JpbGVfd2VidmlldyI6InRydWUiLCJ1aV9tZXNzYWdlX3ZlcnNpb24iOjJ9"
    }}
  
    startInLoadingState
    scalesPageToFit
    style={{ flex: 1, marginTop: 50 }}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
