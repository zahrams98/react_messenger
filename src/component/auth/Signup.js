import React from 'react'

export default class Signup extends React.Component {
    render() {
        return (
            <div className='body'>
                 <div className='container'>
                     <form className='forming'> 
                        <div className='form'>
                            <div className='title'>SIGN UP</div>
                            <div className='email-icon'>
                                <i className='material-icons'>email</i>
                                <input 
                                className='email' 
                                type='text' 
                                placeholder=' email' />
                            </div>
                            <div className='user-icon'>
                                <i className='material-icons'>&#xe7fd;</i> 
                                <input 
                                className='username' 
                                type='text' 
                                placeholder=' username'/>
                            </div>
                            <div className='pass-icon'>
                                <i className='material-icons'>&#xe88d;</i>
                                <input 
                                className='password' 
                                type='password' 
                                placeholder=' password' /> 
                            </div> 
                            <a className='signing' href='https://www.google.com/'>Signup</a> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}