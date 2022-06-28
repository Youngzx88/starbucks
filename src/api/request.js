import axios from 'axios'

export const getMenuList = ({tab}) => 
  axios.get('https://www.fastmock.site/mock/5321bf649d06645c4266f3e0d45ae1cc/menu/all')
  .then ( list => {
    let remainlist=list.data;
    // let result = orders;
    // console.log(tab);
    if(tab){
        switch(tab) {
            case "全部":
              remainlist=remainlist;
                break;
            case "饮料":
              remainlist=remainlist.filter(item => item.status==1);
                break;
            case "美食":
              remainlist=remainlist.filter(item => item.status==2);
                break;
            case "咖啡产品":
              remainlist=remainlist.filter(item => item.status==3);
                break;
            case "商品":
              remainlist=remainlist.filter(item => item.status==4);
                break;
            default:
                break;
        }
    }
    return Promise.resolve({
      remainlist
    });
}
)
