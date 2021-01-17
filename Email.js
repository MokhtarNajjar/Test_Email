//import { Input } from 'react-native-elements';
//import Spinner from 'react-native-loading-spinner-overlay';

import React , {useState, Component} from 'react';
import { View, Text,ImageBackground,text } from 'react-native';
import Button from "react-native-bootstrap-buttons";
class Email extends Component{
    constructor(props) {

        super(props);

        this.state = { 

          Email: '',
        };
    }

   async   SendEmail(){
console.log("Envoi de mail en cours ...");
await fetch('http://91.121.113.131:5000/', {
  method: 'POST',  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: "email@test.fr",
    borne_name:"borne_name",
    date_paiement:"date_paiement",
    commencer:"Commencer_Paiement",
   heure : "Heure_paiement",
num :"Num_compte",
montant : "Montant" , 
tel : "telephone_number",
comments : "Comments"
 })
})
setTimeout(() =>{ 
this.setState({spinner:false});
         this.props.navigation.navigate('Remerciement');
 }, 3000);
//this.setState({spinner:false});
  //       this.props.navigation.navigate('Remerciement');

//fetch("91.121.113.131/server.php");
}

    render(){
        return(
<View>
              <View style={{flex: 1,paddingTop:'10%'}}>
	            <Text >

              Cliquez sur la button pour tester l'envoi de mail :</Text>        
        </View>	
        <View style={{flex: 49}}>
        <View >
     <Button 

      label=" Tester l'envoi de mail "

      rounded size="sm" labelStyle={{fontStyle: 'italic',

      fontSize : d*20 , alignSelf:'center'}} 

      containerStyle ={{ alignSelf:'center',width:'80%'}} 

         onPress={()=> {

          info.telephone_number='';


 
            this.SendEmail();

           }}
   />

        

        </View>

      

    </View>

    </View>

            );

    

    }

}
export default email ;





    export default Email;
