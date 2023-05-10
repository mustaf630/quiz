import React, { useEffect, useState } from 'react'
import {Text, Image, Center, HStack, Pressable, AspectRatio, Modal, VStack, Stack, CloseIcon, CheckIcon} from "native-base"
import data from '../questions/data'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Animated, View } from 'react-native'



const Quiz = () => {
const allQuestions=data;
const [questionNr,setQuestionNr]=useState(0);
const [optionsDisabled,setOptionDisabled]=useState(false)
const [lastQuestion,setLastQuestion]=useState(false)
const [score,setScore]=useState(0)
const  [currentOption,setCurrentOption]= useState()
const  [correctOption,setCorrectOption]= useState()
const [progress, setProgress] = useState(new Animated.Value(0));
const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%','100%']
})

  const check=(value)=>{
  let answer=allQuestions[questionNr]["correct_option"]
  setCorrectOption(answer)
  setOptionDisabled(true)
  setCurrentOption(value)
  Animated.timing(progress, {
    toValue: questionNr+1,
    duration: 1000,
    useNativeDriver: false
}).start();
    if(currentOption === correctOption){
      setTimeout(nextAction,2000)
      setScore(score+1)

    }
    else {
    setTimeout(nextAction,2000)
    }
  }
  function nextAction(){
    if(questionNr === allQuestions.length-1){
        setLastQuestion(true)

    }
    else{
      setQuestionNr(questionNr+1)
      setOptionDisabled(false) 
    }

  }
  return (
    <VStack flex={1} safeArea bg={"#4085f2"} px={5}>
      <Center>
        <HStack w={"100%"} height={50}  px={2}>
          <Center>
          <HStack style={{
                width:320,
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',
            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: "#EDF7F6"
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </HStack>        
          </Center>
        </HStack>
        <AspectRatio ratio={1} width={"100%"} height={250} mt={5}>
          <Image
            source={{uri:allQuestions[questionNr].image}}
            alt=''
            />
        </AspectRatio>
      </Center>
      <Text mt={2} fontSize={17}>question {questionNr+1} of {allQuestions.length}</Text>
      <Text fontSize={22} fontWeight={"bold"}>{allQuestions[questionNr].question}</Text>
      <Center>
        <VStack  width={"90%"} height={250} justifyContent={"center"} >
          <Center>
            {allQuestions[questionNr].options.map(options=>(
              <Pressable disabled={optionsDisabled} key={options} width={"90%"}justifyContent={"center"} alignItems={"center"} h={50} bg={options == correctOption ? "green.400"  :options == currentOption ? "red.400": "white"} mb={5} borderRadius={20} onPress={()=>check(options)}>
                <HStack>
                        <Text fontSize={18} color={"#576fed"} fontWeight={"bold"}>{options}</Text>
                        {
                                options==correctOption ? (
                                    <Stack style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <CheckIcon />
                                    </Stack>
                                ): options == currentOption ? (
                                    <Stack style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <CloseIcon/>
                                    </Stack>
                                ) : null
                            }
                </HStack>
              </Pressable>
            ))}
          </Center>   
        </VStack> 
      </Center>
      <Modal animationPreset='fade' isOpen={lastQuestion} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.Body>
            <VStack>
              <Center>
                <Text  mt={30} fontSize={30} fontWeight={"bold"}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>
                <HStack mt={10}>
                  <Text color="red.400" fontSize={31}>{score}</Text>
                  <Text fontSize={30}>/{allQuestions.length}</Text>
                  </HStack>
                  <HStack flex={1} justifyContent={"space-between"} mt={50} width="100%">
                    <Pressable>
                      <Text fontSize={20}fontWeight={"bold"}>Retry quiz</Text>
                    </Pressable>
                    <Pressable>
                      <Text fontSize={20} fontWeight={"bold"}>New quiz</Text>
                    </Pressable>
                  </HStack>
              </Center>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </VStack>  
  )
}
export default Quiz