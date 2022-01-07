function decodedString(s){
        const st = [];
        for(let i = 0; i<s.length; i++){
            if(s[i]===']'){
                let temp = '';
                while(st.length > 0 &&st[st.length - 1] !== '['){
                        temp +=st[st.length - 1];
                        st.pop();
                }
                st.pop();
                let num = '';
                while (st.length > 0 &&st[st.length - 1].charCodeAt() >= 48 && st[st.length -1 ].charCodeAt()<=57 ){
                   num += st[st.length - 1];
                   st.pop();
                }
                let number =+num;
                st.push(temp.repeat(number));
            }
            else st.push(s[i]);
        }
        return st[0].split``.reverse().join``;
    }
    console.log(decodedString("3[b2[ca]]"))