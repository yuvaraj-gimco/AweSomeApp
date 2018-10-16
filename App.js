import React from 'react';
import { Button, Text,Image,TouchableOpacity,ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Card, Container, CardItem ,Title,Left,Body,Right, Content,Header,Footer,FooterTab} from 'native-base';

//import screens
  //import DetailsScreen from './DetailsScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
      <Header><Left></Left>
        <Body><Title>Nicolai </Title></Body><Right></Right>
   </Header>
   <Content>
    <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}>
      <CardItem bordered style={ {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
     <Image  onPress={() => this.props.navigation.navigate('Details')}  source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/> 
    </CardItem></TouchableOpacity>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Cut And Drill"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem bordered style={ {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
    
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Profiling"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem bordered style={ {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
    
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Kitchen top"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem bordered style={ {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
     <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Engraving"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </CardItem>
      </Card>
      </Content>
      <Footer>
         <FooterTab>
           <Body>
              <Text full>@2018 Ailerin</Text></Body>
        </FooterTab>
        </Footer>
      </Container>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
    
      <Container>
          <ScrollView>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Images')}>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem></TouchableOpacity>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Finger Bits"
          onPress={() => this.props.navigation.navigate('Images')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Core Bits"
          onPress={() => this.props.navigation.navigate('Images')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Drilling"
          onPress={() => this.props.navigation.navigate('Images')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
       </CardItem>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="CNC Blades"
          onPress={() => this.props.navigation.navigate('Images')}
        />
      </CardItem>
      </Card></ScrollView></Container>
    );
  }
}

class ImageDetails extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('Data')}>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem></TouchableOpacity>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="WHITE TWIN FINGER BIT"
          onPress={() => this.props.navigation.navigate('Data')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="YELLOW Z5 FINGER BIT"
          onPress={() => this.props.navigation.navigate('Data')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="BLUE TWIN FINGER BIT"
          onPress={() => this.props.navigation.navigate('Data')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="BLUE Z5 FINGER BIT"
          onPress={() => this.props.navigation.navigate('Data')}
        />
      </CardItem>
      </Card>
      <Card>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
      </CardItem>
      <CardItem>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
      </CardItem>
      <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="YELLOW TWIN FINGER BIT"
          onPress={() => this.props.navigation.navigate('Data')}
        />
      </CardItem>
      </Card></ScrollView></Container>
    );
  }
}
class TableData extends React.Component {
  render() {
    return (
    
      <Text>CODE  AFS94010 
      SIZE  23*30 mm    
      RPM   4500-5200 
      FEED  250-500 mm/min</Text>
     
    //   <div>
    //   <ReactTable
    //       data={data}
    //       columns={[
    //         {
    //           Header: "Name",
    //           columns: [
    //             {
    //               Header: "First Name",
    //               accessor: "firstName"
    //             },
    //             {
    //               Header: "Last Name",
    //               id: "lastName",
    //               accessor: d => d.lastName
    //             }
    //           ]
    //         }
    //       ]}
    //       defaultPageSize={10}
    //       className="-striped -highlight"
    //    />
    //  </div>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Images:ImageDetails,
    Data:TableData


  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
