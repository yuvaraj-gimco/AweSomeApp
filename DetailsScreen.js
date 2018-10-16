import React,{Component} from 'react';

class DetailsScreen extends React.Component {
    render() {
      return (
        <Container>
        <Card>
        <CardItem bordered style={{justifyContent: 'center', alignItems: 'center'}}>
        </CardItem>
        <CardItem>
        <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
        </CardItem>
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
        </Card></Container>
      );
    }
  }
  