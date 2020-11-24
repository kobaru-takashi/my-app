import React from 'react'
import Modal from 'react-modal'

import '@styles/react-modal.styl'

export default class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }
  handleOpen (options) {
    this.setState({
      ... options,
      open: true,
    })
  }
  handleClose () {
    this.setState({open: false})
  }
  render () {
    return <div className="component">
      <table>
        <tbody>
          <tr>
            <th>
              <button
                onClick={() => this.handleOpen({
                  code: 'W4TtTzSxqv8',
                  shouldCloseOnOverlayClick: true,
                  shouldCloseOnEsc: false,
                  closeButton: null,
                })}
              >1</button>
            </th>
            <td>モーダルの外側を押すと閉じます</td>
          </tr>
          <tr>
            <th>
              <button
                onClick={() => this.handleOpen({
                  code: 'XWo627F7CeU',
                  shouldCloseOnOverlayClick: false,
                  shouldCloseOnEsc: true,
                  closeButton: null,
                })}
              >2</button>
            </th>
            <td>Escape キーを押すと閉じます</td>
          </tr>
          <tr>
            <th>
              <button
                onClick={() => this.handleOpen({
                  code: '9qRCARM_LfE',
                  shouldCloseOnOverlayClick: false,
                  shouldCloseOnEsc: false,
                  closeButton: <button 
                    onClick={this.handleClose.bind(this)}
                    style={{backgroundColor: '#f00', position: 'absolute', top: 10, right: 10}} 
                  >x</button>
                })}
              >3</button>
            </th>
            <td>動画右上の `x` を押すと閉じます</td>
          </tr>
        </tbody>
      </table>

      <Modal
        isOpen={this.state.open}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.handleClose.bind(this)}
        style={{backgroundColor: '#005'}}
        contentLabel="ようつべ"

        // close
        shouldCloseOnOverlayClick={this.state.shouldCloseOnOverlayClick}
        shouldCloseOnEsc={this.state.shouldCloseOnEsc}
      > 
        {this.state.closeButton}
        <iframe 
          width={560} 
          height={315} 
          src={`https://www.youtube.com/embed/${this.state.code}`}
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
        />
      </Modal>
    </div>
  }
}