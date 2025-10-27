import { Alert, Platform } from "react-native";
import { iPersonne } from "../interfaces/iPersonne";

class PersonneService {
    modifierPersonne(objPers:iPersonne) {
        if(Platform.OS === "ios" || Platform.OS === "android") Alert.alert(`${objPers.nom} a modifier`);
        if(Platform.OS === "web") alert(`${objPers.nom} a modifier`);
    }
}