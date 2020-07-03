import React from 'react'
import Header from './header'
import { HeadingBannerTitle } from '../components/HeadingBannerTitle'

const Index = props => {
    return(
        <div>
            <HeadingBannerTitle/>
            <div className="col-md-12 col-lg-12 noPadding">
                <Header />
            <div className="col-md-9 mainCom noPadding">
                   {props.children}
                </div>
            </div>
        </div>
    )
}

export default Index