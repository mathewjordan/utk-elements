import React, {Component} from 'react';
import './Elements.css';

const endpoint = 'https://www.lib.utk.edu/wp-json/dc/all';

class Elements extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.fetchElementsData()
    }

    fetchElementsData() {

        fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.collections
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null
    }

    iterateItems(items) {
        return items.map((item, index) => (
            <li key={index}>
                {item.PID}
            </li>
        ));
    }

    render() {

        let {data} = this.state

        if (data)
            return (
                <div className="elements">
                    <header className="elements-header">
                        <h1>Data</h1>
                    </header>
                    <main>
                        {this.iterateItems(data)}
                    </main>
                </div>
            )
        else
            return null
    }
}

export default Elements;
