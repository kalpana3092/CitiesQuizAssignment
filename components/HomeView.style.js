import 
{
    StyleSheet
} from "react-native";
import * as Colors from '../utilities/constant/ColorConstant';

const HomeViewStyle = StyleSheet.create (
    {
        safeArea: {
            flex: 1, 
            backgroundColor: 'white'
        },

        topContainer: {
            marginTop: 20,
            flexDirection: 'column'
        },

        mapView: {
            flex: 1, 
            backgroundColor: 'white',
            marginRight: 20,
            marginLeft: 20,
        },

        buttonContainer: {
            marginTop: 20,
            height: 40,
            flexDirection: 'row-reverse'
        },

        placeButton : {
            height : 40, 
            width : 90,
            marginRight: 20,
            backgroundColor: Colors.L_GREY,
            alignItems:"center",
            justifyContent:"center",
            borderColor: Colors.GREY,
            borderWidth: 1
        },
        textContainer : {
            height : 40, 
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: Colors.L_GREY,
            alignItems:"center",
            justifyContent:"center",
            borderColor: Colors.GREY,
            borderWidth: 1
        },
        placeButtonTitle : {
            fontSize : 15,
            color : Colors.BLACK,
            fontWeight: "bold"
        },

        textTitle : {
            fontSize : 15,
            color : Colors.BLACK,
            fontWeight: "bold",
            textAlign: "center"
        },

        cityTextContainer : {
            marginBottom: 10,
            marginRight: 20,
            marginLeft: 20,
            marginTop:10,
            alignItems:"center",
            justifyContent:"center"
        }

    })
    export default HomeViewStyle