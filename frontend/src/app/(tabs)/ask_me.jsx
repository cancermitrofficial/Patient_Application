import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Easing, FlatList, Image, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Circle, Defs, G, Mask, Path, Rect, Svg } from 'react-native-svg';

import CameraMediaInterface from './ask_me_upload';




const AskMe = () => {
  const [showModal, setShowModal] = useState(false);
  

  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;



  const animateDot = (dot, delay) => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(dot, {
          toValue: -5, // moves up
          duration: 300,
          delay,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0, // moves down
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
  };

  useEffect(() => {
    animateDot(dot1, 200).start();
    animateDot(dot2, 300).start();
    animateDot(dot3, 400).start();
  }, []);


  const Dot = ({ translateY, scale, fill }) => (
    <Animated.View
      style={{
        transform: [{ translateY }, { scale }],
      }}
    >
      <Svg style={styles.processing_color_circle} width="10" height="10" viewBox="0 0 10 10" fill="none">
        <Circle cx="4" cy="4" r="4" fill={fill} />
      </Svg>
    </Animated.View>
  );


  // const categorizedReports = [
  //   {
  //     category: "Blood Reports",
  //     items: [
  //       { id: 1, name: "Blood Report.pdf" },
  //       { id: 2, name: "CBC Report.pdf" }
  //     ]
  //   },
  //   {
  //     category: "MRI Scans",
  //     items: [
  //       { id: 3, name: "MRI Brain.pdf" }
  //     ]
  //   }
  // ];

  //  ==== For uploade reports loading ======

  const [reports, setReports] = useState([
    { id: 1, name: "Blood Report.pdf", uploading: true },
    { id: 2, name: "X-ray.pdf", uploading: false }
  ]);

  // Simulate upload completion after 3 seconds for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      setReports((prev) =>
        prev.map((r) => ({ ...r, uploading: false }))
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, []);



  // Messages inside the middle section
  const messages = [
    {
      id: 1,
      question: 'Explain the difference between radiation and chemotherapy?',
      ans: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in els.'
    },
    {
      id: 2,
      question: 'What are the side effects of chemotherapy?',
      ans: 'Chemotherapy can cause nausea, vomiting, fatigue, hair loss, and other side effects depending on the type of drugs used.'
    },
    {
      id: 3,
      question: 'How is radiation therapy delivered?',
      ans: 'Radiation therapy is usually given using a machine that directs high-energy beams to the cancer cells.'
    },
    {
      id: 4,
      question: 'What is the purpose of immunotherapy in cancer treatment?',
      ans: 'Typing...'
    },
  ];

  const renderItem = ({ item }) => { 
    return (
        <View style={styles.middle_sec_txt}>
          <Text style={styles.response_sec}>{item.question}</Text>
          {/* <Text style={styles.response_sec_ans}>{item.ans}</Text> */}
          {
            item.ans === "Typing..." ? (
              <View style={styles.processing_box}>
                <Animated.View style={{ transform: [{ translateY: dot1 }] }}>
                  <Svg style={styles.processing_color_circle} width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <Circle cx="5" cy="5" r="5" fill="#FCC300" />
                  </Svg>
                </Animated.View>
                <Animated.View style={{ transform: [{ translateY: dot2 }] }}>
                  <Svg style={styles.processing_color_circle} width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <Circle cx="5" cy="5" r="5" fill="#FCC300" />
                  </Svg>
                </Animated.View>
                <Animated.View style={{ transform: [{ translateY: dot3 }] }}>
                  <Svg style={styles.processing_color_circle} width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <Circle cx="5" cy="5" r="5" fill="#FCC300" />
                  </Svg>
                </Animated.View>
              </View>
            ) : (
            <Text style={styles.response_sec_ans}>{item.ans}</Text>
        )}
        </View>
    )
    // return null;
  };


  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // adjust offset based on header height
      >
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Svg style={styles.back_svg} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Defs>
                  <Mask id="mask0_691_2569" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <Rect width="24" height="24" fill="#D9D9D9"/>
                  </Mask>
                </Defs>
                <G mask="url(#mask0_691_2569)">
                  <Path 
                    d="M9.55001 12L16.9 19.35C17.15 19.6 17.2708 19.8917 17.2625 20.225C17.2542 20.5583 17.125 20.85 16.875 21.1C16.625 21.35 16.3333 21.475 16 21.475C15.6667 21.475 15.375 21.35 15.125 21.1L7.42501 13.425C7.22501 13.225 7.07501 13 6.97501 12.75C6.87501 12.5 6.82501 12.25 6.82501 12C6.82501 11.75 6.87501 11.5 6.97501 11.25C7.07501 11 7.22501 10.775 7.42501 10.575L15.125 2.87499C15.375 2.62499 15.6708 2.50415 16.0125 2.51249C16.3542 2.52082 16.65 2.64999 16.9 2.89999C17.15 3.14999 17.275 3.44165 17.275 3.77499C17.275 4.10832 17.15 4.39999 16.9 4.64999L9.55001 12Z" 
                    fill={"#D9D9D9"}
                  />
                </G>
            </Svg>
            <Text style={styles.bar_txt}>Lung cancer information</Text>
            <View style={styles.edit_dots_svg}>
                <Svg style={styles.edit_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path d="M18.2934 2.00002C17.8068 1.99857 17.3248 2.09362 16.8752 2.27966C16.4256 2.46569 16.0174 2.73902 15.6741 3.08384L8.95803 9.80291C8.38655 10.3707 7.93347 11.0463 7.62504 11.7904C7.31661 12.5346 7.15898 13.3326 7.16128 14.1382V16.8381H9.86124C10.6663 16.84 11.4637 16.6821 12.2073 16.3737C12.951 16.0653 13.626 15.6125 14.1934 15.0414L20.9159 8.32556C21.4339 7.80704 21.7865 7.14661 21.9291 6.42776C22.0718 5.7089 21.9981 4.96389 21.7174 4.28689C21.4368 3.60989 20.9617 3.0313 20.3522 2.62425C19.7427 2.2172 19.0263 1.99997 18.2934 2.00002ZM19.545 6.95465L12.8289 13.6737C12.4402 14.0647 11.9777 14.3746 11.4683 14.5856C10.9588 14.7966 10.4126 14.9043 9.86124 14.9027H9.09674V14.1382C9.09553 13.5874 9.20352 13.0418 9.41447 12.533C9.62543 12.0242 9.93516 11.5622 10.3258 11.1738L17.045 4.45475C17.3805 4.14028 17.8251 3.96859 18.2848 3.976C18.7445 3.98341 19.1834 4.16933 19.5085 4.49445C19.8336 4.81957 20.0196 5.2584 20.027 5.71813C20.0344 6.17786 19.8627 6.62244 19.5482 6.95787L19.545 6.95465Z" fill="#ACB8C0"/>
                  <Path d="M5.54834 21.9997H17.1611C18.1022 21.9997 19.0047 21.6258 19.6702 20.9604C20.3356 20.295 20.7094 19.3925 20.7094 18.4514V13.2903H18.774V18.4514C18.774 18.8792 18.604 19.2894 18.3016 19.5919C17.9991 19.8943 17.5889 20.0643 17.1611 20.0643H5.54834C5.12058 20.0643 4.71034 19.8943 4.40786 19.5919C4.10539 19.2894 3.93546 18.8792 3.93546 18.4514V6.83901C3.93546 6.41126 4.10539 6.00103 4.40786 5.69856C4.71034 5.3961 5.12058 5.22617 5.54834 5.22617H10.7096V3.29077H5.54834C4.60726 3.29077 3.70473 3.6646 3.03928 4.33003C2.37384 4.99545 2 5.89796 2 6.83901V18.4514C2 19.3925 2.37384 20.295 3.03928 20.9604C3.70473 21.6258 4.60726 21.9997 5.54834 21.9997Z" fill="#ACB8C0"/>
                </Svg>

                <Svg style={styles.dots_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Mask id="mask0_691_2580" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <Rect width="24" height="24" fill="#D9D9D9"/>
                  </Mask>
                  <G mask="url(#mask0_691_2580)">
                    <Path d="M12 19.2692C11.5875 19.2692 11.2344 19.1223 10.9408 18.8285C10.6469 18.5348 10.5 18.1817 10.5 17.7692C10.5 17.3567 10.6469 17.0035 10.9408 16.7097C11.2344 16.416 11.5875 16.2692 12 16.2692C12.4125 16.2692 12.7656 16.416 13.0592 16.7097C13.3531 17.0035 13.5 17.3567 13.5 17.7692C13.5 18.1817 13.3531 18.5348 13.0592 18.8285C12.7656 19.1223 12.4125 19.2692 12 19.2692ZM12 13.5C11.5875 13.5 11.2344 13.353 10.9408 13.0592C10.6469 12.7655 10.5 12.4125 10.5 12C10.5 11.5875 10.6469 11.2344 10.9408 10.9407C11.2344 10.6469 11.5875 10.5 12 10.5C12.4125 10.5 12.7656 10.6469 13.0592 10.9407C13.3531 11.2344 13.5 11.5875 13.5 12C13.5 12.4125 13.3531 12.7655 13.0592 13.0592C12.7656 13.353 12.4125 13.5 12 13.5ZM12 7.73071C11.5875 7.73071 11.2344 7.58388 10.9408 7.29021C10.6469 6.99638 10.5 6.64321 10.5 6.23071C10.5 5.81821 10.6469 5.46513 10.9408 5.17146C11.2344 4.87763 11.5875 4.73071 12 4.73071C12.4125 4.73071 12.7656 4.87763 13.0592 5.17146C13.3531 5.46513 13.5 5.81821 13.5 6.23071C13.5 6.64321 13.3531 6.99638 13.0592 7.29021C12.7656 7.58388 12.4125 7.73071 12 7.73071Z" fill="#ACB8C0"/>
                  </G>
                </Svg>
            </View>
          </View>
          <View style={styles.middle_sec}>
            <View style={styles.middle_sec_txt}>
              {/* <Text style={styles.que}>How can I help you ?</Text> */}
              {/* <Text style={styles.sec_code}>Enter the security code sent to <Text style={styles.num}>+91 9654102315</Text> </Text> */}
              {messages.length === 0 ? (
                <View style={styles.emptyContainer}>
                  <Text style={styles.que}>How can I help you ?</Text> 
                  <Text style={styles.sec_code}>Enter the security code sent to <Text style={styles.num}>+91 9654102315</Text> </Text>
                </View>
                ) : (
                <FlatList
                  data={messages}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 100 }}
                />
              )}
            </View>
            {/* <Text style={styles.response_sec}>Explain the difference between radiation and chemotherapy?</Text>
            <View style={styles.processing_box}>
              <Animated.View style={{ transform: [{ translateY: dot1 }] }}>
                <Svg style={styles.processing_color_circle} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <Circle cx="5" cy="5" r="5" fill="#FCC300"/>
                </Svg>
              </Animated.View>
              <Animated.View style={{ transform: [{ translateY: dot2 }] }}>
                <Svg style={styles.processing_color_circle} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <Circle cx="5" cy="5" r="5" fill="#FCC300"/>
                </Svg> 
              </Animated.View>
              <Animated.View style={{ transform: [{ translateY: dot3 }] }}>
                <Svg style={styles.processing_color_circle} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <Circle cx="5" cy="5" r="5" fill="#FCC300"/>
                </Svg>
              </Animated.View> 
            </View> */}
          </View>
            {/* <KeyboardAvoidingView style={{ flex: 1 }}> */}
            <View style={styles.sticky_sec}>
              <ScrollView style={styles.suggestions}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}>
                <Text style={styles.sugg_txt}>Booking</Text>
                <Text style={styles.sugg_txt}>Cancer Information</Text>
                <Text style={styles.sugg_txt}>Product Information</Text>
              </ScrollView>
              <View style={styles.inputBox}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.uploaded_report_section}>
                  { 
                    reports.map((report) => (
                        <View style={styles.uploaded_report} key={report.id}>
                          <View style={styles.report_cross}>
                            <Svg style={styles.report_cross_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <Path d="M11.9923 4.85046L11.1507 4.00879L8.00007 7.15938L4.84948 4.00879L4.00781 4.85046L7.15841 8.00105L4.00781 11.1516L4.84948 11.9933L8.00007 8.84272L11.1507 11.9933L11.9923 11.1516L8.84174 8.00105L11.9923 4.85046Z" fill="#656565"/>
                            </Svg>
                          </View>
                          <View style={styles.uploaded_report_icon_txt}>
                            { report.uploading ? (
                            <ActivityIndicator size="small" color="#007AFF" />
                            ) : (
                              <View style={styles.report_icon}>
                                  <Svg style={styles.report_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <Mask id="mask0_658_2631" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                      <Rect width="24" height="24" fill="#D9D9D9"/>
                                    </Mask>
                                    <G mask="url(#mask0_658_2631)">
                                      <Path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19ZM8 17H13C13.2833 17 13.5208 16.9042 13.7125 16.7125C13.9042 16.5208 14 16.2833 14 16C14 15.7167 13.9042 15.4792 13.7125 15.2875C13.5208 15.0958 13.2833 15 13 15H8C7.71667 15 7.47917 15.0958 7.2875 15.2875C7.09583 15.4792 7 15.7167 7 16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17ZM8 13H16C16.2833 13 16.5208 12.9042 16.7125 12.7125C16.9042 12.5208 17 12.2833 17 12C17 11.7167 16.9042 11.4792 16.7125 11.2875C16.5208 11.0958 16.2833 11 16 11H8C7.71667 11 7.47917 11.0958 7.2875 11.2875C7.09583 11.4792 7 11.7167 7 12C7 12.2833 7.09583 12.5208 7.2875 12.7125C7.47917 12.9042 7.71667 13 8 13ZM8 9H16C16.2833 9 16.5208 8.90417 16.7125 8.7125C16.9042 8.52083 17 8.28333 17 8C17 7.71667 16.9042 7.47917 16.7125 7.2875C16.5208 7.09583 16.2833 7 16 7H8C7.71667 7 7.47917 7.09583 7.2875 7.2875C7.09583 7.47917 7 7.71667 7 8C7 8.28333 7.09583 8.52083 7.2875 8.7125C7.47917 8.90417 7.71667 9 8 9Z" fill="#1C1B1F"/>
                                    </G>
                                  </Svg>
                              </View>
                            )}

                            <View style={styles.uploaded_report_txt}>
                              <Text style={styles.report_txt}>Blood Report.pdf</Text>
                            </View>
                          </View>
                        </View>

                      // Loaded report Section

                      //   <View key={report.id} style={styles.uploaded_report_load}>
                      //   <View style={styles.report_cross}>
                      //     <Svg style={styles.report_cross_icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      //       <Path d="M11.9923 4.85046L11.1507 4.00879L8.00007 7.15938L4.84948 4.00879L4.00781 4.85046L7.15841 8.00105L4.00781 11.1516L4.84948 11.9933L8.00007 8.84272L11.1507 11.9933L11.9923 11.1516L8.84174 8.00105L11.9923 4.85046Z" fill="#656565"/>
                      //     </Svg>
                      //   </View>
                      // </View> 
                    ))
                  }
                </ScrollView>
                <TextInput type="text" placeholder='Ask me.....' placeholderTextColor='#ACB8C0'  multiline={true} numberOfLines={2} width={300} height={300} style={[styles.input, { maxHeight: 120 }]} />
                <View style={styles.add_mic_svgs}>
                  <TouchableOpacity style={styles.add_icon} onPress={() => setShowModal(true)}>
                    <Svg style={styles.add_svg} xmlns="http://www.w3.org/2000/Svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <Path d="M6 8H1C0.716667 8 0.479167 7.90417 0.2875 7.7125C0.0958333 7.52083 0 7.28333 0 7C0 6.71667 0.0958333 6.47917 0.2875 6.2875C0.479167 6.09583 0.716667 6 1 6H6V1C6 0.716667 6.09583 0.479167 6.2875 0.2875C6.47917 0.0958333 6.71667 0 7 0C7.28333 0 7.52083 0.0958333 7.7125 0.2875C7.90417 0.479167 8 0.716667 8 1V6H13C13.2833 6 13.5208 6.09583 13.7125 6.2875C13.9042 6.47917 14 6.71667 14 7C14 7.28333 13.9042 7.52083 13.7125 7.7125C13.5208 7.90417 13.2833 8 13 8H8V13C8 13.2833 7.90417 13.5208 7.7125 13.7125C7.52083 13.9042 7.28333 14 7 14C6.71667 14 6.47917 13.9042 6.2875 13.7125C6.09583 13.5208 6 13.2833 6 13V8Z" fill="#F8F8F8"/>
                    </Svg>
                  </TouchableOpacity>
                  {/* <View style={styles.mic}>
                    <Svg style={styles.mic_svg} xmlns="http://www.w3.org/2000/Svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                      <Path d="M15.1869 8.4166C15.1869 9.60688 15.2406 10.7993 15.1759 11.9853H15.1748C15.0258 13.7006 14.0372 15.2305 12.5367 16.0734C11.0352 16.9173 9.21354 16.9633 7.67147 16.1994C6.12828 15.4344 5.06404 13.9569 4.82498 12.2516C4.78772 11.993 4.76908 11.7321 4.77128 11.4713C4.76689 9.41735 4.76141 7.36219 4.77128 5.30834C4.75374 3.54374 5.63165 1.88975 7.10141 0.914448C8.57227 -0.062112 10.4367 -0.227598 12.0565 0.472759C13.6764 1.17421 14.8316 2.64726 15.1263 4.3877C15.1931 4.96092 15.2216 5.53962 15.2129 6.11722C15.226 6.88335 15.2162 7.64944 15.2162 8.41557L15.1869 8.4166Z" fill="#2D255E"/>
                      <Path d="M0.827101 13.3573C1.34881 13.2576 1.86065 13.5688 2.0141 14.0774C2.74953 16.3407 4.41328 18.1854 6.58896 19.1497C8.76565 20.1142 11.2491 20.1077 13.4205 19.1322C15.5928 18.1567 17.2457 16.3034 17.9701 14.0346C18.1181 13.548 18.6091 13.252 19.1089 13.3474L19.1922 13.3638L19.2021 13.366C19.475 13.4197 19.7128 13.5863 19.8575 13.8253C20.0011 14.0631 20.0383 14.3513 19.9594 14.6188C19.0749 17.4641 17.0167 19.7941 14.3029 21.025C11.5903 22.2547 8.47974 22.2668 5.75727 21.0579C3.03477 19.8479 0.957937 17.5332 0.0513821 14.6954C-0.0406819 14.4148 -0.00780347 14.1079 0.140161 13.8526C0.288122 13.5972 0.538024 13.4175 0.827358 13.3572L0.827101 13.3573Z" fill="#2D255E"/>
                    </Svg>
                  </View> */}
                  {/* <View style={styles.upload}>
                    <Svg style={styles.upload_svg} xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <Path d="M5.00005 4.09995L2.10005 6.99995C1.91672 7.18328 1.68338 7.27495 1.40005 7.27495C1.11672 7.27495 0.883382 7.18328 0.700049 6.99995C0.516715 6.81662 0.425049 6.58328 0.425049 6.29995C0.425049 6.01662 0.516715 5.78328 0.700049 5.59995L5.30005 0.999951C5.50005 0.799951 5.73338 0.699951 6.00005 0.699951C6.26672 0.699951 6.50005 0.799951 6.70005 0.999951L11.3 5.59995C11.4834 5.78328 11.575 6.01662 11.575 6.29995C11.575 6.58328 11.4834 6.81662 11.3 6.99995C11.1167 7.18328 10.8834 7.27495 10.6 7.27495C10.3167 7.27495 10.0834 7.18328 9.90005 6.99995L7.00005 4.09995V12.3C7.00005 12.5833 6.90422 12.8208 6.71255 13.0125C6.52088 13.2041 6.28338 13.3 6.00005 13.3C5.71672 13.3 5.47922 13.2041 5.28755 13.0125C5.09588 12.8208 5.00005 12.5833 5.00005 12.3V4.09995Z" fill="#2D255E"/>
                    </Svg>
                  </View> */}
                  {/* <View style={styles.upload_freez}>
                    <Svg style={styles.upload_freez_svg} xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <Path d="M5.00005 4.09995L2.10005 6.99995C1.91672 7.18328 1.68338 7.27495 1.40005 7.27495C1.11672 7.27495 0.883382 7.18328 0.700049 6.99995C0.516715 6.81662 0.425049 6.58328 0.425049 6.29995C0.425049 6.01662 0.516715 5.78328 0.700049 5.59995L5.30005 0.999951C5.50005 0.799951 5.73338 0.699951 6.00005 0.699951C6.26672 0.699951 6.50005 0.799951 6.70005 0.999951L11.3 5.59995C11.4834 5.78328 11.575 6.01662 11.575 6.29995C11.575 6.58328 11.4834 6.81662 11.3 6.99995C11.1167 7.18328 10.8834 7.27495 10.6 7.27495C10.3167 7.27495 10.0834 7.18328 9.90005 6.99995L7.00005 4.09995V12.3C7.00005 12.5833 6.90422 12.8208 6.71255 13.0125C6.52088 13.2041 6.28338 13.3 6.00005 13.3C5.71672 13.3 5.47922 13.2041 5.28755 13.0125C5.09588 12.8208 5.00005 12.5833 5.00005 12.3V4.09995Z" fill="#7A8CA0"/>
                    </Svg>
                  </View> */}
                  <View style={styles.processing}>
                    <Svg style={styles.processing_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <Mask id="mask0_1562_1332" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <Rect width="24" height="24" fill="#D9D9D9"/>
                      </Mask>
                      <G mask="url(#mask0_1562_1332)">
                        <Path d="M6 16V8C6 7.45 6.19583 6.97917 6.5875 6.5875C6.97917 6.19583 7.45 6 8 6H16C16.55 6 17.0208 6.19583 17.4125 6.5875C17.8042 6.97917 18 7.45 18 8V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H8C7.45 18 6.97917 17.8042 6.5875 17.4125C6.19583 17.0208 6 16.55 6 16Z" fill="#F8F8F8"/>
                      </G>
                    </Svg>
                  </View>
                </View>
              </View>
              <Text style={styles.disclaimer}>Ask AI can make mistakes</Text>
            </View>
            {/* </KeyboardAvoidingView> */}
          <Image source={require('../../constants/Ellipse 432.png')} alt='img' style={styles.anime}></Image>
            
          <Modal 
          visible={showModal} 
          transparent 
          animationType="slide"
          statusBarTranslucent={true}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          >  
            <CameraMediaInterface onClose={ () => setShowModal(false)} />
          </Modal>
        </View> 
    </KeyboardAvoidingView>
  )
}       


export default AskMe

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // backgroundColor: '#19212E',
    backgroundColor: '#11161eff',
    height: '100%',
    position: 'relative',
    // width: '100%',
    
    // display: 'flex',
    // marginTop: 100,
  },
  header: {
    height: 60,
    // padding: '14 16',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0D0C22',
    width: '100%',
    alignItems: 'center',
  },
  back_svg: {
    width: 24,
    height: 24,
  },
  bar_txt: {
    color: '#ACB8C0',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: 700,
  },
  edit_dots_svg: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  edit_svg: {
    width: 24,
    height: 24,
  },
  dots_svg: {
    width: 24,  
    height: 24,
  },
  middle_sec: {
    // flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    // marginBottom: 200,
    marginBottom: 0,
    gap: 10,
    marginLeft: 16,
    marginRight: 16,
    height: '80%',
    paddingTop: 20,
  },
  middle_sec_txt: {
    // flex: 1,
    justifyContent: 'center', 
    // alignItems: 'center',
    // marginBottom: 200,
    marginBottom: 50,
    gap: 10,
  },

  emptyContainer: {
    justifyContent: 'center',
    marginBottom: 230,
    gap: 10,
  },

  que: {  
    color: '#DBE1E5',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontSize: 30,
    fontWeight: '600',
  },
  sec_code: {
    color: '#ACB8C0',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '400',
  },

  response_sec: {
    color: '#ACB8C0',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: '#415A77',
    padding: 10,
    borderWidth: 1,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 75,
    marginBottom: 24,
    width: 305,
  },
  response_sec_ans: {
    color: '#F8F8F8',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 400,
    padding: 0,
    margin: 0,
  },

  processing_box: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: '#415A77',
    borderWidth: 1,
    borderColor: '#ACB8C0',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 4,
    width: 62,
  },
  processing_color_circle: {
    width: 4,
    height: 4,
  },
  num: {
    color: '#ACB8C0',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10, 
  }, 
  sticky_sec : {
    position: 'relative',
    margin: '20px 16px 50px',
    flex: 1,
  
    // position: 'absolute', 
    // bottom: 0,
    // left: 0,
    // right: 0,
    // paddingHorizontal: 16,
    // paddingBottom: 34, 
  },
  suggestions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    // bottom: 280,
    bottom: 250,
    zIndex: 3,
    
  },
  sugg_txt: {
    color: '#ACB8C0',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: 500,
    borderWidth: 1,
    borderColor:'rgba(237, 240, 242, 0.6)',
    padding: '10px 20px',
    borderRadius: 20,
    backdropFilter: 'blur(5)',
    paddingTop: 10 ,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    marginRight: 10,
  },

  inputBox: { 
    padding: 12, 
    borderRadius: 16,
    borderColor: '#8AA1B0',
    borderWidth: 1,
    backgroundColor: 'rgba(248, 248, 248, 0.12)',
    boxShadow: '0 6px 12px 0 rgba(172, 184, 192, 0.06)',
    backdropFilter: 'blur(3px)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    minHeight: 96,
    height: 184,
    position: "relative",
    // bottom: 70,
    bottom: 120,
    marginLeft: 16,
    marginRight: 16,
    zIndex: 3,
  },

  uploaded_report_section: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
    overflow: 'hidden',
    flexGrow: 0,
  },
 
  uploaded_report: {

    padding: 6,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#464D57',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },

  report_cross: {
    position: 'absolute', 
    top: 6,
    right: 6,
  },
  uploaded_report_icon_txt: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  report_cross_icon: {
    padding: 3.151,
    backgroundColor: 'rgba(219, 225, 229, 0.70)',
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  report_icon: {
    borderWidth: 1,
    borderColor: '#FCC300',
    borderRadius: 6,
    backgroundColor: '#FCC300',
    padding: 8,
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  report_svg: {
    width: 14.286,
    height: 14.286,
  }, 
  uploaded_report_txt: {

  },
  report_txt: {
    color: '#F8F8F8',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontweight: 400,  
  },

  uploaded_report_load: {
    borderRadius: 6,
    backgroundColor: '#ACB8C0',
    width: 72,
    height: 72,
  },

  input: {
    border: 'transparent',
    position: 'absolute',
    bottom: 32,
    left: 12,
    height: 60,
    // width: 'calc(100% - 24px)',
    // color: '#ACB8C0',
    color: '#F8F8F8',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 500,
  },
  add_mic_svgs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    bottom: 12,
    gap: 10,
  },
  add_icon: {

  },
  add_svg: {
    margin: 5,
  },
  mic: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  mic_svg: {

  },
  upload: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  upload_svg : {
    width: 11.15,
    height: 12.6,
  },
  upload_freez: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  upload_freez_svg: {
      
  },
  processing : {
    backgroundColor: '#ACB8C0',
    borderRadius: 20,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  processing_svg: {
    
  },
  disclaimer :{
    // margin:'0 auto', 
    fontWeight: 400,
    fontstyle: 'normal',
    fontsize: 10,
    color: '#ACB8C0',
    fontFamily: 'Montserrat',
    marginTop: 10,
    position: 'absolute',
    bottom: 25,
    marginLeft: 120,
  },
  anime: {
    position: 'absolute',
    // borderRadius: 379,
    // opacity: 0.7,
    // backgroundColor: "#2D255E",
    // backdropFilter: 'blur(80px)',
    width: 333,
    height: 379,
    bottom: 0,
    right: 0,
    zIndex: 2,
    // overflow: 'hidden'
  },
})


