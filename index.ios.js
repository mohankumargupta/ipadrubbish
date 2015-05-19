'use strict';
require('date-format-lite');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AppStateIOS,
  AlertIOS
} = React;

var boo;

var mohan = function() {
var date = new Date();
//var date = "2015-05-18".date();
var weeknumber = date.format("W");
var day = date.format("w");
var evenweek = weeknumber%2 === 0;

if (day != 1) {
  evenweek = !evenweek;
}

else {
  evenweek = evenweek? true:false;
}

var option;

if (evenweek) {
  option = 0
}

else {
  option = 1;
}

var rubbishoptions = ["RECYCLING","GARDEN WASTE"];

return {
   'option': option,
   'answer': rubbishoptions[option]
};

}


//boo = mohan();
var backgroundColorOptions = ["#000080","purple"];

var rubbish = React.createClass({
getInitialState: function() {
  var boo = mohan();
  var container = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColorOptions[boo['option']]
  }
});


  return {
    boo: boo,
    container: container
  };
},
  componentDidMount: function() {
  AppStateIOS.addEventListener('change', this._handleAppStateChange);
},
  componentWillUnmount: function() {
    AppStateIOS.removeEventListener('change', this._handleAppStateChange);
  },
_handleAppStateChange: function(currentAppState) {
//AlertIOS.alert('Username empty', this.state.boo['answer'], [{text: 'Cancel', onPress: function(){} }]);
//this.state.boo = mohan();
if (currentAppState == 'background') {
  return;
}



//var boo = this.state.boo;
//var container = this.state.container;
var boo = mohan();


  var moo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColorOptions[boo['option']]
  }
});

this.setState({boo: boo, container: moo});
//AlertIOS.alert('Username empty', this.state.boo['answer'], [{text: 'Cancel', onPress: function(){} }]);

},
getOption: function() {
return this.state.boo['option'];
}
,
  render: function() {
    return (
      <View style={this.state.container.container}>
        <Text style={styles.welcome}>
          {this.state.boo['answer']}
        </Text>
      </View>
    );
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
});

AppRegistry.registerComponent('rubbish', () => rubbish);
