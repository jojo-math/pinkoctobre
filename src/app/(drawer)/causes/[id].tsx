import { CAUSES } from '@/src/data/causes';
import { fetchWikiSummary } from '@/src/services/wiki';
import { useThemeMode } from '@/src/theme/ThemeProvider';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Id() {
    const { id } = useLocalSearchParams();
    const cause = CAUSES.find((item) => item.id === id);
    const { theme } = useThemeMode();

    const [wiki, setWiki] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!cause) return;
    (async () => {
      setLoading(true);
      const result = await fetchWikiSummary(cause.nom);
      setWiki(result);
      setLoading(false);
    })();
  }, [id]);

    if(!cause){
        return (
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-pinktober text-lg">Cause introuvable</Text>
      </View>
    );
    }
  return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black p-4 space-y-20" 
        style={{backgroundColor: theme === "dark" ? "#000" : "#fff"}}
      >
        <Image source={cause.image} style={{width:200, height:100}}/>
        <Text className="text-pinktober text-2xl font-extrabold mb-2">{cause.nom}</Text>
        <Text className="text-zinc-400 mb-2"
        style={{color: theme === "dark" ? "#fff" : "#000"}}>
        {cause.dateDecouverte ? `Découverte : ${cause.dateDecouverte}` : ""}
      </Text>
        <Text className="dark:text-white mb-3 text-center">{cause.description}</Text>
        <Text className="text-pinktober text-xl mb-2 dark:text-white">Méthodes préventives</Text>
            {cause.preventions.map((p, i) => (
            <Text key={i} className="dark:text-white mb-1"
            style={{color: theme === "dark" ? "#fff" : "#000"}}>
          • {p}
        </Text>
      ))}

      <Text className="text-pinktober text-xl font-bold mt-6 mb-2">
        Résumé Wikipédia
      </Text>
      {loading ? (
        <ActivityIndicator color="#ec4899" />
      ) : wiki ? (
        <View>
          <Text className="text-zinc-200 mb-2">{wiki.extract}</Text>
          {wiki.content_urls?.desktop?.page && (
            <Text
              onPress={() => window.open(wiki.content_urls.desktop.page)}
              className="text-pinktober underline"
            >
              Lire l’article complet
            </Text>
          )}
        </View>
      ) : (
        <Text className="text-black">Résumé indisponible</Text>
      )}
      </View>
  );
}

const styles = StyleSheet.create({})