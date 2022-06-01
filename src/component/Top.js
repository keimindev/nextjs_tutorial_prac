import {Header} from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
        <div style={{ display: "flex" , paddingTop: 20}}>
        <div style={{ flex: "150px 0 0"}}>
        <img 
            src="/images/2.jpg" 
            alt="logo"
            style={{ display: "block", width: 90}}
            />
        </div>
        <Header as="h1">Min</Header>
				</div>
        <Gnb/>
    </div>
    )
}
