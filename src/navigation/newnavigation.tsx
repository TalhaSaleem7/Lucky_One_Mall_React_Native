// // import React, { useEffect, useState } from 'react';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { NavigationContainer } from '@react-navigation/native';
// // import Home from '../screens/Home/Home.screen';
// // import Profile from '../screens/Profile/Profile.screen';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// // import Splash_Screen from '../screens/WelcomeScreen/SplashScreen';
// // import Get_Started from '../screens/WelcomeScreen/Get_Started';
// // import Login from '../screens/WelcomeScreen/Login';
// // import { GestureHandlerRootView } from 'react-native-gesture-handler';
// // import Signup from '../screens/WelcomeScreen/Signup';
// // import Total_Jobs from '../screens/Job_Screens/Total_Jobs';
// // import Phase1 from '../screens/Job_Screens/Phase1';
// // import Phase2 from '../screens/Job_Screens/Phase2';
// // import Phase3 from '../screens/Job_Screens/Phase3';
// // import Show_Chats from '../screens/Job_Screens/ShowChats';
// // import Customer_Profile_Section from '../screens/Profile/Customer_Profile_Section';
// // import GETAPI from '../screens/GETAPI';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const Stack = createNativeStackNavigator();
// // const Tab = createBottomTabNavigator();

// // function JobStack() {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>
// //       <Stack.Screen name="Total_Jobs" component={Total_Jobs} />
// //       <Stack.Screen name="Phase1" component={Phase1} />
// //       <Stack.Screen name="Phase2" component={Phase2} />
// //       <Stack.Screen name="Phase3" component={Phase3} />
// //       <Stack.Screen name="Show_Chats" component={Show_Chats} />
// //       <Stack.Screen
// //         name="Customer_Profile_Section"
// //         component={Customer_Profile_Section}
// //       />
// //     </Stack.Navigator>
// //   );
// // }

// // function AuthStack() {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>
// //       {/* <Stack.Screen name="Splash_Screen" component={Splash_Screen} /> */}
// //       {/* <Stack.Screen name="GETAPI" component={GETAPI} /> */}
// //       <Stack.Screen name="Get_Started" component={Get_Started} />
// //       <Stack.Screen name="Login" component={Login} />
// //       <Stack.Screen name="Signup" component={Signup} />
// //     </Stack.Navigator>
// //   );
// // }

// // function MainNavigation() {
// //   // const userIsAuthenticated = false;  
// //   const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     const checkUserId = async () => {
// //       try {
// //         const userId = await AsyncStorage.getItem('userId');
// //         if (userId !== null) {
// //           setUserIsAuthenticated(true);
// //         } else {
// //           setUserIsAuthenticated(false);
// //         }
// //       } catch (error) {
// //         console.error('Error retrieving user ID from AsyncStorage:', error);
// //       }
// //     };

// //     checkUserId();
// //   }, []);


  



// //   return (
// //     <NavigationContainer>
// //       {userIsAuthenticated ? (
// //         <Tab.Navigator>
         
// //           <Tab.Screen
// //             name="Profile"
// //             component={Customer_Profile_Section}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <AntDesignIcon name="user" color={color} size={size} />
// //               ),
// //               headerShown: false, 
// //             }}
// //           />
// //           <Tab.Screen
// //             name="Jobs"
// //             component={JobStack}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <Icon name="briefcase" color={color} size={size} />
// //               ),
// //               headerShown: false, 
// //             }}
// //           />
// //            <Tab.Screen
// //             name="Chats"
// //             component={Show_Chats}
// //             options={{
// //               tabBarIcon: ({ color, size }) => (
// //                 <AntDesignIcon name="home" color={color} size={size} />
// //               ),
// //               headerShown: false, 
// //             }}
// //           />
// //         </Tab.Navigator>
// //       ) : (
// //         <AuthStack />
// //       )}
// //     </NavigationContainer>
// //   );
// // }

// // export default MainNavigation;































// import React, { useState, useEffect } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
 
// import Home from '../screens/Home/Home.screen';
// import Profile from '../screens/Profile/Profile.screen';
// import Get_Started from '../screens/WelcomeScreen/Get_Started';
// import Login from '../screens/WelcomeScreen/Login';
// import Signup from '../screens/WelcomeScreen/Signup';
// import Total_Jobs from '../screens/Job_Screens/Total_Jobs';
// import Phase1 from '../screens/Job_Screens/Phase1';
// import Phase2 from '../screens/Job_Screens/Phase2';
// import Phase3 from '../screens/Job_Screens/Phase3';
// import Show_Chats from '../screens/Job_Screens/ShowChats';
// import Customer_Profile_Section from '../screens/Profile/Customer_Profile_Section';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Steps from '../screens/Steps/Steps';
// import { StripeProvider } from '@stripe/stripe-react-native';
// import Payment from '../screens/Job_Screens/Payment';
// import Camera from '../screens/Job_Screens/Camera';
// import Chat from '../ChatServices/Chat';
// import Create_Job_Post from '../screens/Job_Screens/CreateJobPost';
// import ReviewScreen from '../screens/Job_Screens/Review';
// import PaymentPhase from '../screens/Job_Screens/PaymentPhase';
// import Welcome_Job from '../screens/WelcomeScreen/Welcome_Job';
// import Splash from '../screens/Mall_Splash_Screens/Splash';
// import Splash_Second from '../screens/Mall_Splash_Screens/Splash_Second';
// import Splash_Third from '../screens/Mall_Splash_Screens/Splash_Third';
// import Splash_Four from '../screens/Mall_Splash_Screens/Splash_Four';
// import Mall_Login from '../screens/Mall_Auth_Screens/Mall_Login';
// import Mall_Signup from '../screens/Mall_Auth_Screens/Mall_Signup';
// import Mall_Success_Screen from '../screens/Mall_Auth_Screens/Mall_Success_Screen';
// import FirstInner from '../screens/Mall_Inner_Screens/FirstInner';
 

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function JobStack() {
//   return (
//     <StripeProvider
//     publishableKey="pk_test_51ON5LdEN3YLdh4I948W834ytPcQZSo2Tbzv5qeXnxhY0Dn17NO38qnPTftybqXyt0IW1JBd6SERgV42fzcPdNegl00GVHgIKnx"
//      >
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Total_Jobs" component={Total_Jobs} />
//       <Stack.Screen name="Phase1" component={Phase1} />
//       <Stack.Screen name="Phase2" component={Phase2} />
//       <Stack.Screen name="Phase3" component={Phase3} />
//       <Stack.Screen name="Show_Chats" component={Show_Chats} />
//       <Stack.Screen name="Payment" component={Payment} />
//       <Stack.Screen name="Steps" component={Steps} />
//       <Stack.Screen name="Welcome_Job" component={Welcome_Job} />
//       <Stack.Screen name="Create_Job_Post" component={Create_Job_Post} />
//       <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
//       <Stack.Screen name="PaymentPhase" component={PaymentPhase} />
//       <Stack.Screen name="Chat" component={Chat} />

//       <Stack.Screen name="Splash_Second" component={Splash_Second} />

      
//       <Stack.Screen
//         name="Customer_Profile_Section"
//         component={Customer_Profile_Section}
//       />
//     </Stack.Navigator>

//     </StripeProvider>
//   );
// }

// interface AuthStackProps {
//   setUserIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const AuthStack: React.FC<AuthStackProps> = ({ setUserIsAuthenticated }) => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Splash" component={Splash} />
//       <Stack.Screen name="Splash_Second" component={Splash_Second} />
//       <Stack.Screen name="Splash_Third" component={Splash_Third} />
//       <Stack.Screen name="Splash_Four" component={Splash_Four} />

//       <Stack.Screen name="Mall_Login" component={Mall_Login} />

//       <Stack.Screen name="Mall_Signup" component={Mall_Signup} />

//       <Stack.Screen name="Mall_Success_Screen" component={Mall_Success_Screen} />

//       <Stack.Screen name="FirstInner" component={FirstInner} />

//       <Stack.Screen name="Login">
//         {(props) => <Login {...props} setUserIsAuthenticated={setUserIsAuthenticated} />}
//       </Stack.Screen>
//       <Stack.Screen name="Signup">
//         {(props) => <Signup {...props} setUserIsAuthenticated={setUserIsAuthenticated} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );
// };

// function MainNavigation() {
//   const [userIsAuthenticated, setUserIsAuthenticated] = useState(true);

//   useEffect(() => {
//     const checkUserId = async () => {
//       try {
//         const userId = await AsyncStorage.getItem('userId');
//         if (userId !== null) {
//           setUserIsAuthenticated(true);
//         } else {
//           setUserIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.error('Error retrieving user ID from AsyncStorage:', error);
//       }
//     };

//     checkUserId();
//   }, []);

//   return (
//     <StripeProvider
//     publishableKey="pk_test_51ON5LdEN3YLdh4I948W834ytPcQZSo2Tbzv5qeXnxhY0Dn17NO38qnPTftybqXyt0IW1JBd6SERgV42fzcPdNegl00GVHgIKnx"
//      >
    
//     {/* <NavigationContainer 
    
      
    
    
//     >
//       {userIsAuthenticated ? (
//         <Tab.Navigator>
        

// <Tab.Screen
//             name="Camera"
//             component={Camera}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <AntDesignIcon name="home" color={color} size={size} />
//               ),
//               headerShown: false, 
//             }}
//           />



// <Tab.Screen
//   name="Profile"
//   options={{
//     tabBarIcon: ({ color, size }) => (
//       <AntDesignIcon name="user" color={color} size={size} />
//     ),
//     headerShown: false,
//   }}
// >
//   {(props) => (
//     <Customer_Profile_Section
//       {...props}
//       setUserIsAuthenticated={setUserIsAuthenticated}
//     />
//   )}
// </Tab.Screen>
          
//           <Tab.Screen
//             name="Jobs"
//             component={JobStack}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="briefcase" color={color} size={size} />
//               ),
//               headerShown: false, 
//             }}
//           />
//            <Tab.Screen
//             name="Chats"
//             component={Chat}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <AntDesignIcon name="home" color={color} size={size} />
//               ),
//               headerShown: false, 
//             }}
//           />
//         </Tab.Navigator>
//       ) : (
//         <AuthStack setUserIsAuthenticated={setUserIsAuthenticated} />
//       )}
//     </NavigationContainer> */}


// <NavigationContainer>
//       {userIsAuthenticated ? (
//         <Tab.Navigator
//           screenOptions={{
//             tabBarStyle: { backgroundColor: '#1E1E1E' }, // Set your desired background color here
//           }}
//         >
//           <Tab.Screen
//             name="Post a Job"
//             component={Create_Job_Post}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <AntDesignIcon name="upload" color={color} size={size} />
//               ),
//               headerShown: false, 
//             }}
//           />
          
//           <Tab.Screen
//             name="Jobs"
//             component={JobStack}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="briefcase" color={color} size={size} />
//               ),
//               headerShown: false, 
//             }}
//           />

// <Tab.Screen
//             name="Profile"
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <AntDesignIcon name="user" color={color} size={size} />
//               ),
//               headerShown: false,
//             }}
//           >
//             {(props) => (
//               <Customer_Profile_Section
//                 {...props}
//                 setUserIsAuthenticated={setUserIsAuthenticated}
//               />
//             )}
//           </Tab.Screen>
//           {/* <Tab.Screen
//             name="Chats"
//             component={Chat}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <AntDesignIcon name="car" color={color} size={size} />
//               ),
//               headerShown: false, 
//             }}
//           /> */}
//         </Tab.Navigator>
//       ) : (
//         <AuthStack setUserIsAuthenticated={setUserIsAuthenticated} />
//       )}
//     </NavigationContainer>

//     </StripeProvider>

    
//   );
// }

// export default MainNavigation;


 
 

 










import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
 
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
 
import Splash from '../screens/Mall_Splash_Screens/Splash';
import Splash_Second from '../screens/Mall_Splash_Screens/Splash_Second';
import Splash_Third from '../screens/Mall_Splash_Screens/Splash_Third';
import Splash_Four from '../screens/Mall_Splash_Screens/Splash_Four';
import Mall_Login from '../screens/Mall_Auth_Screens/Mall_Login';
import Mall_Signup from '../screens/Mall_Auth_Screens/Mall_Signup';
import Mall_Success_Screen from '../screens/Mall_Auth_Screens/Mall_Success_Screen';
import FirstInner from '../screens/Mall_Inner_Screens/FirstInner';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function JobStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Splash" component={Splash} />
       <Stack.Screen name="Splash_Second" component={Splash_Second} />
       <Stack.Screen name="Splash_Third" component={Splash_Third} />
       <Stack.Screen name="Splash_Four" component={Splash_Four} />

       <Stack.Screen name="Mall_Login" component={Mall_Login} />

       <Stack.Screen name="Mall_Signup" component={Mall_Signup} />

       <Stack.Screen name="Mall_Success_Screen" component={Mall_Success_Screen} />

       <Stack.Screen name="FirstInner" component={FirstInner} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash_Screen" component={Splash_Screen} /> */}
    


      <Stack.Screen name="Splash" component={Splash} />
       <Stack.Screen name="Splash_Second" component={Splash_Second} />
       <Stack.Screen name="Splash_Third" component={Splash_Third} />
       <Stack.Screen name="Splash_Four" component={Splash_Four} />

       <Stack.Screen name="Mall_Login" component={Mall_Login} />

       <Stack.Screen name="Mall_Signup" component={Mall_Signup} />

       <Stack.Screen name="Mall_Success_Screen" component={Mall_Success_Screen} />

       <Stack.Screen name="FirstInner" component={FirstInner} />
    </Stack.Navigator>
  );
}

function MainNavigation() {
  const userIsAuthenticated = false; // Check if the user is authenticated

  return (
    <NavigationContainer>
      {userIsAuthenticated ? (
        <Tab.Navigator>
         
          <Tab.Screen
            name="Profile"
            component={FirstInner}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesignIcon name="user" color={color} size={size} />
              ),
              headerShown: false, 
            }}
          />
          <Tab.Screen
            name="Jobs"
            component={FirstInner}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="briefcase" color={color} size={size} />
              ),
              headerShown: false, 
            }}
          />
           <Tab.Screen
            name="Chats"
            component={FirstInner}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesignIcon name="home" color={color} size={size} />
              ),
              headerShown: false, 
            }}
          />
        </Tab.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}

export default MainNavigation;