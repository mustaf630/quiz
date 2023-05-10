
import React from 'react'
import { HStack, Pressable, VStack,Center ,Text, ScrollView, AspectRatio,Image} from 'native-base'
import { useNavigation } from "@react-navigation/native";
const Category = () => {
    const navigation=useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <VStack safeArea flex={1} backgroundColor={"#ffffff"} >
            <Center>
                <VStack w={"90%"} mt={10} h={100} >
                    <Text  color={"#f55d7a"} fontWeight={"bold"} fontSize={35}>Let's Play</Text>
                    <Text color={"#f55d7a"} >Be the first!</Text>
                </VStack>
                <Pressable
                onPress={()=>navigation.navigate("quiz")}
                borderWidth={0.5} w={"90%"} backgroundColor={"#ed7a89"} px={5} borderRadius={30} h={150} mt={15}>
                    <HStack justifyContent={"space-between"}>
                        <VStack top={85}>
                            <Text color={"white"}>level 1</Text>
                            <Text color={"white"} fontSize={22} fontWeight={"bold"}>Travel newbie</Text>
                        </VStack>
                        <AspectRatio ratio={1} width={120}  height={120} top={-50} >
                            <Image
                                source={{uri:"/Users/musdafamohamed/apps/quiz/src/images/books.png"}}
                                alt='image1'
                                />
                        </AspectRatio>
                    </HStack>
                </Pressable>
                <Pressable borderWidth={0.5} backgroundColor={"#249ff8"} w={"90%"} px={5} borderRadius={30} h={150} mt={60}>
                    <HStack justifyContent={"space-between"}>
                        <VStack top={85}>
                            <Text color={"white"} >level 2</Text>
                            <Text color={"white"} fontSize={22} fontWeight={"bold"}>Continuing</Text>
                        </VStack>
                        <AspectRatio ratio={1} width={120}  height={120} top={-50} >
                            <Image
                                source={{uri:"/Users/musdafamohamed/apps/quiz/src/images/air-hot-balloon.png"}}
                                alt='image1'
                                />
                        </AspectRatio>
                    </HStack>
                </Pressable>
                <Pressable borderWidth={0.5} backgroundColor={"#bb9bd8"} w={"90%"} px={5} borderRadius={30} h={150} mt={60}>
                    <HStack justifyContent={"space-between"}>
                        <VStack top={85}>
                            <Text color={"white"}>level 3</Text>
                            <Text color={"white"} fontSize={22} fontWeight={"bold"}>Experienced</Text>
                        </VStack>
                        <AspectRatio ratio={1} width={120}  height={120} top={-50} right={0} >
                            <Image
                                source={{uri:"/Users/musdafamohamed/apps/quiz/src/images/travelling.png"}}
                                alt='image1'
                                />
                        </AspectRatio>
                    </HStack>
                </Pressable>
            </Center>
            
        </VStack>
    </ScrollView>
  )
}

export default Category