import { View, ScrollView, Text, Image } from "react-native";

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import Icon from '@expo/vector-icons/Feather'

import { Link, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SecureStore from 'expo-secure-store'

export default function Memories() {
    const { bottom, top } = useSafeAreaInsets()
    const router = useRouter()

    async function signOut() {
        await SecureStore.deleteItemAsync('token')

        router.push('/')
    }

    return(
        <ScrollView 
            className='mt-4 flex-1 px-8' 
            contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
        >
            <View className="flex flex-row items-center justify-between">
                <NLWLogo/>

                <View className="flex-row gap-1.5">
                    <TouchableOpacity onPress={signOut} className="h-10 w-10 items-center justify-center rounded-full bg-red-500">
                        <Icon name="log-out" size={16} color="#000"/>
                    </TouchableOpacity>
                    
                    <Link 
                        href="/new"
                        asChild
                    > 
                        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
                            <Icon name="plus" size={16} color="#000"/>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>

            <View className="mt-6 space-y-10">
                <View className="space-y-4">
                    <View className="flex-row items-center gap-2">
                        <View className="h-px w-5 bg-gray-50"/>
                        <Text className="font-body text-xs text-gray-100">12 de abril, 2023</Text>
                    </View>
                    <View className="space-y-4">
                        <Image 
                            source={{ uri: 'https://cdn-3.motorsport.com/images/amp/YKEZbVX0/s6/ferrari-499p-1.jpg' }} 
                            className="aspect-video w-full rounded-lg"
                            alt="499p"
                        />
                        <Text className="font-body text-base leading-relaxed text-gray-100">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nisi totam voluptatum exercitationem dolor, aut odit atque nobis placeat eaque delectus, corrupti magnam libero reprehenderit eveniet sed minus accusantium ex.
                        </Text>
                        <Link href="/memories/id" asChild>
                            <TouchableOpacity className="flex-row items-center gap-2">
                                <Text className="font-body text-sm text-gray-200">Ler mais</Text>
                                <Icon name="arrow-right" size={16} color="#9e9ea0"/>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}