import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import { ChevronLeft, CreditCard as Edit3, MoveVertical as MoreVertical, Plus, Mic } from 'lucide-react-native';

const AiScreenmain = () => {
  return (
   <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <LinearGradient
        colors={['#2C3E50', '#34495E', '#4A5A6A', '#5D4E75']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Custom Status Bar */}
          <View style={styles.statusBar}>
            <Text style={styles.time}>9:41</Text>
            <View style={styles.statusIcons}>
              <View style={styles.signalBars}>
                <View style={[styles.bar, styles.bar1]} />
                <View style={[styles.bar, styles.bar2]} />
                <View style={[styles.bar, styles.bar3]} />
                <View style={[styles.bar, styles.bar4]} />
              </View>
              <View style={styles.wifiIcon}>
                <View style={styles.wifiArc1} />
                <View style={styles.wifiArc2} />
                <View style={styles.wifiArc3} />
              </View>
              <View style={styles.battery}>
                <View style={styles.batteryLevel} />
              </View>
            </View>
          </View>

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <ChevronLeft color="#FFFFFF" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Lung cancer information</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Edit3 color="#FFFFFF" size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <MoreVertical color="#FFFFFF" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Main Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.mainContent}>
              <Text style={styles.mainTitle}>How can I help you?</Text>
              <Text style={styles.subtitle}>
                Enter the security code sent to +91{'\n'}9654102315
              </Text>
            </View>

            {/* Category Buttons */}
            <View style={styles.categoryContainer}>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryText}>Booking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryText}>Cancer Information</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryText}>Product</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Chat Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Ask me......"
                placeholderTextColor="#8A9BA8"
                multiline
              />
              <View style={styles.inputActions}>
                <TouchableOpacity style={styles.inputButton}>
                  <Plus color="#8A9BA8" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputButton}>
                  <Mic color="#FFFFFF" size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.disclaimer}>Ask AI can make mistakes</Text>
          </View>

          {/* Home Indicator */}
          <View style={styles.homeIndicator} />
        </SafeAreaView>
      </LinearGradient>
    </View>
  )
}

export default AiScreenmain

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    backgroundColor: '#FFFFFF',
    width: 3,
    borderRadius: 1,
  },
  bar1: {
    height: 4,
  },
  bar2: {
    height: 6,
  },
  bar3: {
    height: 8,
  },
  bar4: {
    height: 10,
  },
  wifiIcon: {
    width: 15,
    height: 12,
    position: 'relative',
  },
  wifiArc1: {
    position: 'absolute',
    bottom: 0,
    left: 6,
    width: 3,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 1.5,
  },
  wifiArc2: {
    position: 'absolute',
    bottom: 0,
    left: 3,
    width: 9,
    height: 7,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 0,
  },
  wifiArc3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 15,
    height: 11,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomWidth: 0,
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
    position: 'relative',
  },
  batteryLevel: {
    position: 'absolute',
    left: 1,
    top: 1,
    bottom: 1,
    width: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 8,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  mainContent: {
    alignItems: 'center',
    paddingTop: 120,
    paddingHorizontal: 32,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: '#B8C7D1',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 60,
    gap: 12,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    minHeight: 24,
    maxHeight: 100,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginLeft: 12,
  },
  inputButton: {
    padding: 4,
  },
  disclaimer: {
    color: '#8A9BA8',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },
  homeIndicator: {
    alignSelf: 'center',
    width: 134,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
    marginBottom: 8,
  },
});