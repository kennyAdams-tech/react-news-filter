import React, { Component } from 'react'
import JSON from './db.json'
//components
import Header from './components/header'
import Newslist from './components/new_list'

class App extends Component {
  state = {
    news: JSON,
    filtered: []

  }

   getKeywords = (e) => {
      // console.log(e.target.value)
      let keyword = e.target.value
      let filtered = this.state.news.filter((item) => {
        return item.title.indexOf(keyword) > -1
      })
      
      this.setState({
        filtered
      })
   }

  render() {
  return (
    <div >
      <Header keywords={this.getKeywords}/>
      <Newslist item={this.state.filtered.length === 0 ? this.state.news : this.state.filtered}>
        <div className="mt-3 fs-3 h2 container">
            News:
        </div>
      </Newslist>
    </div>
  )
}
}

export default App
