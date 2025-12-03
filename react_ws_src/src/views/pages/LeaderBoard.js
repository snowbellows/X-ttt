import React, { Component} from 'react'

export default class LeaderBoard extends Component { 

	constructor (props) {
		super(props)

    this.state = {
      leaderboard: app.settings.leaderboard || []
    }

    fetch('/leader-board')
      .then((response) => response.json())
      .then((data) => {
        this.setState(({leaderboard }) =>
          ({leaderboard: leaderboard.concat(data).sort((a, b) => new Date(b.date) - new Date(a.date))}))
      })
	}

  render () { 
    const {leaderboard} = this.state

    return (
      <section id='leader_board'>
        <div id='page-container'>
          <h2 className="leader_board_header">Leader Board</h2>
          <table className='leader_board_table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Opponent</th>
                <th>Winner</th>
                <th>Game</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry.name + entry.opponent + entry.date}>
                  <td className=''>{entry.name}</td>
                  <td>{entry.opponent}</td>
                  <td>{entry.winner}</td>
                  <td>{entry.game}</td>
                  <td>{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}