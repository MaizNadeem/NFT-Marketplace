import { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { COLORS, NFTData } from '../constants'
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components';

import app from '../database/firebase'
import { getDatabase, ref, onValue } from "firebase/database"

const Home = () => {

  const nftData = null;
  const [firebaseNFTData, setFirebaseNFTData] = useState();

  useEffect(() => {
    const db = getDatabase(app)
    const dbRef = ref(db, 'NFTData')
    onValue(dbRef, (snapshot) => {
      nftData = snapshot.val()
      setFirebaseNFTData(nftData);
    })
  }, [])
  
  const handleSearch = (value) => {
    if (!value.length) return setNtfData(firebaseNFTData)
    const filteredData = firebaseNFTData.filter((item) => 
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    if (filteredData.length){
      setNtfData(filteredData)
    } else {
      setNtfData(nftData)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={ COLORS.primary } />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={firebaseNFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ <HomeHeader onSearch={handleSearch}/> }
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex:-1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
