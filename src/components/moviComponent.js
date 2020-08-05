import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchMoviesAction, addMoviesAction } from '../redux-saga/action/action'



class moviComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex: 1, marginTop: 34}}>
                <Text style={{margin: 10, fontSize: 20}}>redux saga - movi list</Text>
                <Text style={{margin: 10, fontSize: 20}}>New Movi</Text>
                <View style={{height:100, margin:10}}>
                    <TextInput style={{flex:1, margin: 5, padding: 10, borderWidth: 2}}
                        onChangeText={(text)=> this.setState({moviName: text})}
                        value={this.state.moviName}
                        placeholder="Nhap ten phim moi"> 
                    </TextInput>
                    <TextInput style={{flex:1, margin: 5, padding: 10, borderWidth: 2, width: 200}}
                        onChangeText={(text)=> this.setState({releaseYear: text})}
                        value={this.state.releaseYear}
                        placeholder="Nhap nam"> 
                    </TextInput>
                </View>
                <View style={{height: 70, flexDirection: 'row',}}>
                    <TouchableOpacity style={{padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor:'blue'}}
                        onPress={()=>{
                            this.props.onFetchMovie();
                        }}>
                            <Text>fletch movies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor:'blue'}}
                        onPress={()=>{

                        }}>
                            <Text>add movie</Text>
                    </TouchableOpacity>
                </View>
                <FlatList data={this.props.movies}
                 keyExtractor={(item) => item.name}
                 renderItem ={({item, index})=>
                 <Text style={{padding: 10, fontWeight: 'bold',
                fontSize:17,
            color:'white',
        backgroundColor: (index %2 ===0) ? 'dodgerblue' : 'mediumseagreen'}}>
            {`${item.name}`}
        </Text>
                 }></FlatList>
            </View>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        movies: state.movieReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovie: () =>{
            dispatch(fetchMoviesAction())
        },
        onAddMovie: () =>{
            dispatch(addMoviesAction())
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(moviComponent)