import React, {Component} from 'react'
import classnames from 'classnames';

import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from '../constants/TodoFilters';


const FILTER_TITLES={
 [SHOW_ALL]:'All'   ,
 [SHOW_ACTIVE]:'Active',
 [SHOW_COMPLETED]:'Completed'
}

class Footer extends Component {

    renderTodoCount(count){
        return (
            <span className="todo-count">{count} item(s) left</span>
        );
    }
    renderFilterLinks(filter){
        
        const title=FILTER_TITLES[filter];
        const {onShow,filter:selectedFilter}=this.props;

        return (
            <a style={{cursor:'pointer'}} 
               className={classnames({selected:filter===selectedFilter})}
               onClick={()=>onShow(filter)}
               >
                {title}
            </a>
        );
    }
    renderClearCompleted(){
        let {onClearCompleted}=this.props;
        return (
             <button className="clear-completed" onClick={onClearCompleted}>
                    Clear Completed
             </button>
        )
    }

    render() {
        let {onClearCompleted,activeCount} = this.props;
        return (
            <footer className="footer">
                {this.renderTodoCount(activeCount)}
                <ul className="filters">
                    {
                        [SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED].map(filter=>
                            <li key={filter}>
                                {this.renderFilterLinks(filter)}
                            </li>
                        )
                    }
                </ul>
               {this.renderClearCompleted()}
            </footer>
        )
    }
}

export default Footer