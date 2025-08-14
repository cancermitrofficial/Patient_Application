import { BlurView } from 'expo-blur';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { G, Mask, Path, Rect, Svg } from 'react-native-svg';



// const { width, height } = Dimensions.get('window');

export default function CameraMediaInterface({ onClose }) {

  return (
    <View style={{justifyContent: 'flex-end', height: '100%', margin: 0, padding: 0 }}>
      <View style={styles.container}>
        {/* Main content area */}
        <View style={styles.mainContent}>
          
        </View>

        {/* Bottom sheet with blur effect */}
        <BlurView intensity={80} tint="dark" style={styles.bottomSheet}>
          {/* Close button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Mask id="mask0_662_5230" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <Rect width="24" height="24" fill="#D9D9D9"/>
                  </Mask>
                  <G mask="url(#mask0_662_5230)">
                      <Path d="M12 13.4L7.10005 18.3C6.91672 18.4834 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4834 5.70005 18.3C5.51672 18.1167 5.42505 17.8834 5.42505 17.6C5.42505 17.3167 5.51672 17.0834 5.70005 16.9L10.6 12L5.70005 7.10005C5.51672 6.91672 5.42505 6.68338 5.42505 6.40005C5.42505 6.11672 5.51672 5.88338 5.70005 5.70005C5.88338 5.51672 6.11672 5.42505 6.40005 5.42505C6.68338 5.42505 6.91672 5.51672 7.10005 5.70005L12 10.6L16.9 5.70005C17.0834 5.51672 17.3167 5.42505 17.6 5.42505C17.8834 5.42505 18.1167 5.51672 18.3 5.70005C18.4834 5.88338 18.575 6.11672 18.575 6.40005C18.575 6.68338 18.4834 6.91672 18.3 7.10005L13.4 12L18.3 16.9C18.4834 17.0834 18.575 17.3167 18.575 17.6C18.575 17.8834 18.4834 18.1167 18.3 18.3C18.1167 18.4834 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4834 16.9 18.3L12 13.4Z" fill="#ACB8C0"/>
                  </G>
              </Svg>

          </TouchableOpacity>

          {/* Media options */}
          <View style={styles.optionsContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.optionButton, styles.optionButtonPressed] : styles.optionButton}>
              <View style={styles.iconContainer}>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <Mask id="mask0_1342_2144" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                          <Rect width="30" height="30" fill="#D9D9D9"/>
                      </Mask>
                      <G mask="url(#mask0_1342_2144)">
                          <Path d="M14.9999 21.875C16.5624 21.875 17.8906 21.3281 18.9843 20.2344C20.0781 19.1406 20.6249 17.8125 20.6249 16.25C20.6249 14.6875 20.0781 13.3594 18.9843 12.2656C17.8906 11.1719 16.5624 10.625 14.9999 10.625C13.4374 10.625 12.1093 11.1719 11.0156 12.2656C9.92181 13.3594 9.37494 14.6875 9.37494 16.25C9.37494 17.8125 9.92181 19.1406 11.0156 20.2344C12.1093 21.3281 13.4374 21.875 14.9999 21.875ZM14.9999 19.375C14.1249 19.375 13.3854 19.0729 12.7812 18.4688C12.177 17.8646 11.8749 17.125 11.8749 16.25C11.8749 15.375 12.177 14.6354 12.7812 14.0312C13.3854 13.4271 14.1249 13.125 14.9999 13.125C15.8749 13.125 16.6145 13.4271 17.2187 14.0312C17.8229 14.6354 18.1249 15.375 18.1249 16.25C18.1249 17.125 17.8229 17.8646 17.2187 18.4688C16.6145 19.0729 15.8749 19.375 14.9999 19.375ZM4.99994 26.25C4.31244 26.25 3.7239 26.0052 3.23431 25.5156C2.74473 25.026 2.49994 24.4375 2.49994 23.75V8.75C2.49994 8.0625 2.74473 7.47396 3.23431 6.98438C3.7239 6.49479 4.31244 6.25 4.99994 6.25H8.93744L10.4999 4.5625C10.7291 4.3125 11.0051 4.11458 11.3281 3.96875C11.651 3.82292 11.9895 3.75 12.3437 3.75H17.6562C18.0104 3.75 18.3489 3.82292 18.6718 3.96875C18.9947 4.11458 19.2708 4.3125 19.4999 4.5625L21.0624 6.25H24.9999C25.6874 6.25 26.276 6.49479 26.7656 6.98438C27.2551 7.47396 27.4999 8.0625 27.4999 8.75V23.75C27.4999 24.4375 27.2551 25.026 26.7656 25.5156C26.276 26.0052 25.6874 26.25 24.9999 26.25H4.99994ZM4.99994 23.75H24.9999V8.75H19.9374L17.6562 6.25H12.3437L10.0624 8.75H4.99994V23.75Z" fill="#ACB8C0"/>
                      </G>
                  </Svg>
              </View>
              <Text style={styles.optionText}>Camera</Text>
            </Pressable>

            <Pressable style={({ pressed }) => pressed ? [styles.optionButton, styles.optionButtonPressed] : styles.optionButton}>
              <View style={styles.iconContainer}>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <Mask id="mask0_1342_2333" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                          <Rect width="30" height="30" fill="#D9D9D9"/>
                      </Mask>
                      <G mask="url(#mask0_1342_2333)">
                          <Path d="M6.25 26.25C5.5625 26.25 4.97396 26.0052 4.48438 25.5156C3.99479 25.026 3.75 24.4375 3.75 23.75V6.25C3.75 5.5625 3.99479 4.97396 4.48438 4.48438C4.97396 3.99479 5.5625 3.75 6.25 3.75H23.75C24.4375 3.75 25.026 3.99479 25.5156 4.48438C26.0052 4.97396 26.25 5.5625 26.25 6.25V23.75C26.25 24.4375 26.0052 25.026 25.5156 25.5156C25.026 26.0052 24.4375 26.25 23.75 26.25H6.25ZM6.25 23.75H23.75V6.25H6.25V23.75ZM8.75 21.25H21.25C21.5 21.25 21.6875 21.1354 21.8125 20.9063C21.9375 20.6771 21.9167 20.4583 21.75 20.25L18.3125 15.6563C18.1875 15.4896 18.0208 15.4062 17.8125 15.4062C17.6042 15.4062 17.4375 15.4896 17.3125 15.6563L14.0625 20L11.75 16.9063C11.625 16.7396 11.4583 16.6562 11.25 16.6562C11.0417 16.6562 10.875 16.7396 10.75 16.9063L8.25 20.25C8.08333 20.4583 8.0625 20.6771 8.1875 20.9063C8.3125 21.1354 8.5 21.25 8.75 21.25Z" fill="#ACB8C0"/>
                      </G>
                  </Svg>

              </View>
              <Text style={styles.optionText}>Photo</Text>
            </Pressable>

            <Pressable style={({ pressed}) => pressed ? [styles.optionButton, styles.optionButtonPressed] : styles.optionButton}>
              <View style={styles.iconContainer}>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <Mask id="mask0_1342_2043" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                          <Rect width="30" height="30" fill="#D9D9D9"/>
                      </Mask>
                      <G mask="url(#mask0_1342_2043)">
                          <Path d="M5 25.001C4.3125 25.001 3.72396 24.7562 3.23437 24.2666C2.74479 23.777 2.5 23.1885 2.5 22.501V7.50098C2.5 6.81348 2.74479 6.22493 3.23437 5.73535C3.72396 5.24577 4.3125 5.00098 5 5.00098H11.4687C11.8021 5.00098 12.1198 5.06348 12.4219 5.18848C12.724 5.31348 12.9896 5.49056 13.2187 5.71973L15 7.50098H25C25.6875 7.50098 26.276 7.74577 26.7656 8.23535C27.2552 8.72494 27.5 9.31348 27.5 10.001V22.501C27.5 23.1885 27.2552 23.777 26.7656 24.2666C26.276 24.7562 25.6875 25.001 25 25.001H5ZM5 22.501H25V10.001H13.9687L11.4687 7.50098H5V22.501Z" fill="#ACB8C0"/>
                      </G>
                  </Svg>
              </View>
              <Text style={styles.optionText}>Files</Text>
            </Pressable>
          </View>
        </BlurView>


        {/* Upload Modal */}
        {/* <Modal
          transparent={true}
          animationType="fade"
        >
        </Modal> */}

        {/* Background blur circle */}
        <BlurView intensity={60} style={styles.backgroundBlur} />
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(70, 77, 87, 0.80)',
    position: 'relative',
    height: '180%',
    margin: 0,
    padding: 0,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    background: 'rgba(70, 77, 87, 0.80)',
    backdropFilter: 'blur(3px)',
  },
  // title: {
  //   color: '#FFFFFF',
  //   fontSize: 28,
  //   fontWeight: '600',
  //   textAlign: 'center',
  //   marginBottom: 16,
  // },
  // subtitle: {
  //   color: '#ACB8C0',
  //   fontSize: 14,
  //   textAlign: 'center',
  //   lineHeight: 20,
  // },
  // phoneNumber: {
  //   fontWeight: '700',
  //   color: '#ACB8C0',
  // },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 238,
    // height: 283,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#19212E',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 80,
    gap: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 20,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 45,
    gap: 17,
    maxWidth: '100%',
  },
  optionButton: {
    alignItems: 'center',
    padding: 16,
    gap: 10,
    width: 106,
    height: 92,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DBE1E5',
    justifyContent: 'center',
  },
  optionButtonPressed: { 
    backgroundColor: 'rgba(219, 225, 229, 0.30)',
  },
  iconContainer: {
    width: 30,
    height: 30,
  },
  optionText: {
    color: '#ACB8C0',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  backgroundBlur: {
    position: 'absolute',
    bottom: -100,  
    right: 0,
    width: '100%',
    height: '100%',
    // borderRadius: 150,
    // backgroundColor: 'rgba(70, 77, 87, 0.80)',
    zIndex: -1, 
  },

});