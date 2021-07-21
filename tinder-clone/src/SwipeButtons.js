import React from 'react'
import "./SwipeButtons.css"
import CancelIcon from '@material-ui/icons/Cancel';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipebutton">
            <IconButton>
                <CancelIcon className="cancel" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon className="flash" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="heart" fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarIcon className="star" fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
