import React, { Component } from 'react'

import { propTypes, defaultProps } from './props'
import PlayerLimitedReactPlayer from './PlayerLimitedReactPlayer'
import renderPreloadPlayers from './preload'
import players from './players'

export default class ReactPlayer extends Component {
  static displayName = 'ReactPlayer'
  static propTypes = propTypes
  static defaultProps = defaultProps

  implementationRef = player => {
    this.playerLimitedReactPlayer = player
  }

  render () {
    return <PlayerLimitedReactPlayer ref={this.implementationRef} {...this.props} players={players} preloaders={renderPreloadPlayers} />
  }

  // re-expose the public API of PlayerLimitedReactPlayer
  canPlay = (url) => {
    return this.implementationRef.canPlay(url)
  }
  getDuration = () => {
    return this.playerLimitedReactPlayer.getDuration()
  }
  getCurrentTime = () => {
    return this.playerLimitedReactPlayer.getCurrentTime()
  }
  getInternalPlayer = (key = 'player') => {
    return this.playerLimitedReactPlayer.getInternalPlayer(key)
  }
  seekTo = fraction => {
    this.playerLimitedReactPlayer.seekTo(fraction)
  }
  progress = () => {
    this.playerLimitedReactPlayer.progress()
  }
}
