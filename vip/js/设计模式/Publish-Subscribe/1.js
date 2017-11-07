var pubsub={};  
(function(q){  
    var topics={},  
        subUid=-1,  
        subscribers,  
        len;  
    //发布广播事件，包含特定的topic名称和参数  
    q.publish=function(topic, args){  
        if(!topics[topic]){  
            return false;  
        }  
  
        subscribers=topics[topic];  
        len=subscribers ? subscribers.length : 0;  
  
        while(len--){  
            subscribers[len].func(topic, args);  
        }  
        return this;  
    };  
    q.subscribe=function(topic, func){  
        if(!topics[topic]){  
            topics[topic]=[];  
        }  
  
        var token=(++subUid).toString();  
        topics[topic].push({  
            token:token,  
            func:func  
        });  
        return token;  
    };  
  
    q.unsubscribe=function(token){  
        for(var m in topics){  
            if(topics[m]){  
                for(var i = 0, j=topics[m].length; i < j; i++){  
                    if(topics[m][i].token === token){  
                        topics[m].splice(i, 1);  
                        return token;  
                    }  
                }  
            }  
        }  
        return this;  
    };  
})(pubsub);

function log1(topic ,data){
     console.log(topic , data);
}
function log2(topic ,data){
 console.log("Topic is "+topic+" Data is "+data);
}
pubsub.subscribe("sss",log1);
pubsub.subscribe("cccc",log2);
pubsub.publish("sss","aaaaa1");
pubsub.publish("sss","aaaaa2");
pubsub.publish("cccc","ssssss");