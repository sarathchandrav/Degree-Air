import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from './actions/index';

import './css/AirQuality';
import AirQualSearch from './AirQualSearch';




class AirQuality extends React.Component {

    componentDidMount() {
        this.props.fetchAPI();
    }
    
    renderList() {
        //console.log(this.props.posts)
        if (this.props.posts.aqiParams) {
            return this.props.posts.aqiParams.map(post => {
                return (
                    <div className='mainTable' key={post.name}>
                        <table>
                            
                            <tbody>
                                <tr style={{padding:"4px"}}>
                                    <th>{post.name} </th>
                                    <th>{post.value} </th>
                                    <th>{post.aqi}</th>
                                    <th></th>
                                    <th>{post.text}</th>
                                    <th>{post.update}</th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                )
            })
        }

    }

    

    searchBar() {
        console.log(this.props.posts)
        if(this.props.posts.source){
            return(
                <div className="searchBarDiv">
                    <span>{this.props.posts.source.name}, {this.props.posts.country}</span>
                    <img src={this.props.posts.clouds.slice(28)}></img>
                        
                </div>
            )   
        }
        
    }

    render() {

        return (
            <div className="mainContainer">
                 
                {this.searchBar()}
                <AirQualSearch />
                <table>
                    <tbody>
                        <tr>
                            <th>CHEMICAL NAME</th>
                            <th>CHEMICAL VALUE</th>
                            <th>AIR QUALITY INDEX</th>
                            <th>SEVERITY</th>
                            <th>REMARK</th>
                            <th>LAST UPDATE</th>
                        </tr>

                    </tbody>
                </table>
                {this.renderList()}
            </div>)
    };
}

const mapStateToProps = (state) => {
    return { posts: state.airQuality }
}

export default connect(mapStateToProps, { fetchAPI })(AirQuality);
