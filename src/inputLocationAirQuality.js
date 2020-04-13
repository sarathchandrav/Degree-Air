import React from 'react';
import { fetchSearchCityAPI } from './actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';


const theme = {
    fg: "#E7B833",
    bg: "white"
}

const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
});

const Button = styled.button`
                            font-size: 1em;
                            border-radius: 3px;
                            color: ${props => props.inverted ? "white" : "black"};
                            background-color: ${props => props.inverted ? "black" : "white"};
                            `
const Card = styled.div``
const AreaLabel = styled(Button)`height:40px;width:100%`

const AreaContainer = styled.div`
                                background-color: #C1C1C1;
                                `

const PollutionRepoContainer = styled(AreaContainer)`
                                                    width:70%;
                                                    float:Right;
                                                    position:relative;
                                                    top:-625px;
                                                    `

const NavBar = styled.div`       
                        background: #2185D0;
                        padding:10px;
                        color: white;
                        `
const SideNav = styled.div`width:30%;`



class inputLocationAirQuality extends React.Component {
    state = { loading: true }
    componentDidMount() {
        this.props.fetchSearchCityAPI(this.props.match.params.cityname);
        //console.log(this.props.match.params.cityname)
        setTimeout(
            function () {
                this.setState({ loading: false });
            }.bind(this),
            5000
        );
    }

    render() {
        console.log(this.props)
        // console.log(this.state.loading)
        return (
            <div className="mainContainer">
                {!this.props.posts || this.state.loading ? (
                    <div style={{ height: '100vh', width: '100%' }} className="ui segment">
                        <div className="ui active dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    </div>
                ) : (
                        <div className="innerContainer">
                            <NavBar>
                                Hyderabad, 16 Area Pollution Report
                                <button style={{ float: "right" }} onClick={() => { this.props.history.goBack() }}>back</button>
                            </NavBar>
                            {this.props.posts.results.map(function (area, idx) {
                                return (
                                    <div>
                                        <SideNav>
                                            <AreaContainer>
                                                <AreaLabel key={idx}>
                                                    {area.location}
                                                </AreaLabel>
                                            </AreaContainer>
                                        </SideNav>
                                    </div>
                                )
                            })}
                            
                                <PollutionRepoContainer className="ui four cards">
                                    {this.props.posts.results.map(function (area, idx) {
                                        return (
                                            <div className="card">
                                                {area.measurements.map(function (measure) {
                                                    return (
                                                        <div >
                                                            {measure.parameter}
                                                            {measure.value}
                                                            {measure.lastUpdateed}<hr />
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        )
                                    })}

                                </PollutionRepoContainer>
                            </div>
                        
                    )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.cityAirQuality }
}

export default connect(mapStateToProps, { fetchSearchCityAPI })(inputLocationAirQuality);