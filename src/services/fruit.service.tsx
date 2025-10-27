import { Alert, Platform } from "react-native";
import { iFruit } from "../interfaces/iFruit";

class FruitService {
    modifierPersonne(objFruit:iFruit) {
        if(Platform.OS === "ios" || Platform.OS === "android") Alert.alert(`${objFruit.nom} a modifier`);
        if(Platform.OS === "web") alert(`${objFruit.nom} a modifier`);
    }
}