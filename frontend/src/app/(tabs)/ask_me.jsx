import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Defs, G, Mask, Path, Rect, Svg } from 'react-native-svg';

import CameraMediaInterface from './ask_me_upload';




const LoginCom = () => {
  const [showModal, setShowModal] = useState(false);

  const openCameraMediaInterface = () => {
    setShowModal(true);
  };

  return (
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
        <Text style={styles.que}>How can I help you ?</Text>
        <Text style={styles.sec_code}>Enter the security code sent to <Text style={styles.num}>+91 9654102315</Text> </Text>
      </View>
      {/* <KeyboardAvoidingView> */}
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
            <TextInput type="text" placeholder='Ask me.....' multiline={true} numberOfLines={2} width={300} height={300} style={styles.input} />
            <View style={styles.add_mic_svgs}>
              <View style={styles.add_icon} onPress={openCameraMediaInterface}>
                <Svg style={styles.add_svg} xmlns="http://www.w3.org/2000/Svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <Path d="M6 8H1C0.716667 8 0.479167 7.90417 0.2875 7.7125C0.0958333 7.52083 0 7.28333 0 7C0 6.71667 0.0958333 6.47917 0.2875 6.2875C0.479167 6.09583 0.716667 6 1 6H6V1C6 0.716667 6.09583 0.479167 6.2875 0.2875C6.47917 0.0958333 6.71667 0 7 0C7.28333 0 7.52083 0.0958333 7.7125 0.2875C7.90417 0.479167 8 0.716667 8 1V6H13C13.2833 6 13.5208 6.09583 13.7125 6.2875C13.9042 6.47917 14 6.71667 14 7C14 7.28333 13.9042 7.52083 13.7125 7.7125C13.5208 7.90417 13.2833 8 13 8H8V13C8 13.2833 7.90417 13.5208 7.7125 13.7125C7.52083 13.9042 7.28333 14 7 14C6.71667 14 6.47917 13.9042 6.2875 13.7125C6.09583 13.5208 6 13.2833 6 13V8Z" fill="#F8F8F8"/>
                </Svg>
              </View>
              <View style={styles.mic}>
                <Svg style={styles.mic_svg} xmlns="http://www.w3.org/2000/Svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <Path d="M15.1869 8.4166C15.1869 9.60688 15.2406 10.7993 15.1759 11.9853H15.1748C15.0258 13.7006 14.0372 15.2305 12.5367 16.0734C11.0352 16.9173 9.21354 16.9633 7.67147 16.1994C6.12828 15.4344 5.06404 13.9569 4.82498 12.2516C4.78772 11.993 4.76908 11.7321 4.77128 11.4713C4.76689 9.41735 4.76141 7.36219 4.77128 5.30834C4.75374 3.54374 5.63165 1.88975 7.10141 0.914448C8.57227 -0.062112 10.4367 -0.227598 12.0565 0.472759C13.6764 1.17421 14.8316 2.64726 15.1263 4.3877C15.1931 4.96092 15.2216 5.53962 15.2129 6.11722C15.226 6.88335 15.2162 7.64944 15.2162 8.41557L15.1869 8.4166Z" fill="#2D255E"/>
                  <Path d="M0.827101 13.3573C1.34881 13.2576 1.86065 13.5688 2.0141 14.0774C2.74953 16.3407 4.41328 18.1854 6.58896 19.1497C8.76565 20.1142 11.2491 20.1077 13.4205 19.1322C15.5928 18.1567 17.2457 16.3034 17.9701 14.0346C18.1181 13.548 18.6091 13.252 19.1089 13.3474L19.1922 13.3638L19.2021 13.366C19.475 13.4197 19.7128 13.5863 19.8575 13.8253C20.0011 14.0631 20.0383 14.3513 19.9594 14.6188C19.0749 17.4641 17.0167 19.7941 14.3029 21.025C11.5903 22.2547 8.47974 22.2668 5.75727 21.0579C3.03477 19.8479 0.957937 17.5332 0.0513821 14.6954C-0.0406819 14.4148 -0.00780347 14.1079 0.140161 13.8526C0.288122 13.5972 0.538024 13.4175 0.827358 13.3572L0.827101 13.3573Z" fill="#2D255E"/>
                </Svg>
              </View>
            </View>
          </View>
          <Text style={styles.disclaimer}>Ask AI can make mistakes</Text>
        </View>
      {/* </KeyboardAvoidingView> */}
      <Image source={require('../../constants/Ellipse 432.png')} alt='img' style={styles.anime}></Image>
      <CameraMediaInterface visible={showModal} onClose={() => setShowModal(false)} />
    </View>
  )
}       

 
export default LoginCom

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    padding: '14 16', 
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
    flex: 1,
    justifyContent: 'center', 
    // alignItems: 'center',
    marginBottom: 200,
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
    bottom: 180,
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
    height: 96,
    position: "relative",
    bottom: 70,
    marginLeft: 16,
    marginRight: 16,
    zIndex: 3,

  },
  input: {
    border: 'transparent',
    position: 'absolute',
    bottom: 32,
    left: 12,
    height: 60,
    // width: 'calc(100% - 24px)',
    color: '#ACB8C0',
    placeholderTextColor: '#ACB8C0',
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
  disclaimer :{
    // margin:'0 auto', 
    fontWeight: 400,
    fontstyle: 'normal',
    fontsize: 10,
    color: '#ACB8C0',
    fontFamily: 'Montserrat',
    marginTop: 6,
    position: 'absolute',
    bottom: 25,
    marginLeft: 100,
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


