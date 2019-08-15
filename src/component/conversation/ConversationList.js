import React from 'react'

export default class ConversationList extends React.Component {
    render(){
        return(
            <div className='conversation-list'>
                <div className='conversation-bar'>
                    <img src='/images/lala.png' alt={'profile'}  style={{borderRadius: 50}} />
                    <div>
                        <div className='name-date'>
                            <span> zahra </span>
                            <span> today</span>
                        </div>
                        <div className='name-date'>
                            <span>hello</span>
                            <span className='unseen'> 2 </span>
                        </div>
                    </div>
                </div>
                <div className='conversation-bar'>
                    <img src='/images/lala.png' alt={'profile'}  style={{borderRadius: 50}} />
                    <div>
                        <div className='name-date'>
                            <span> zahra </span>
                            <span> today</span>
                        </div>
                        <div className='name-date'>
                            <span>hello</span>
                            <span className='unseen'> 2 </span>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}
