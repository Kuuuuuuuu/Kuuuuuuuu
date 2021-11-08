client.on(`message`, async function(message) {
     try {
              if(message.channel.id !== VerifyRoom) {
              	if(message.member.roles.cache.some(r => r.name === "🎲│Co-Owner") && message.member.id !== OwnerID) {
                  if(message.member.roles.cache.some(r => r.name === "🔨│Mod") || message.member.roles.cache.some(r => r.name === "👤│Member") || message.member.roles.cache.some(r => r.name === "🔒│Admin") || message.member.roles.cache.some(r => r.name === "🎲│Omlet Creators")) return;
                  message.member.setNickname(`〔🧂〕${message.author.username}`);
              }
              if(message.member.roles.cache.some(r => r.name === "👤│Member") && message.member.id !== OwnerID) {
                   if(message.member.roles.cache.some(r => r.name === "🔨│Mod") || message.member.roles.cache.some(r => r.name === "🎲│Co-Owner") || message.member.roles.cache.some(r => r.name === "🔒│Admin") || message.member.roles.cache.some(r => r.name === "🎲│Omlet Creators")) return;
                   message.member.setNickname(`〔👤〕${message.author.username}`);
              }
              if(message.member.roles.cache.some(r => r.name === "🔨│Mod") && message.member.id !== OwnerID) {
                  if(message.member.roles.cache.some(r => r.name === "🎲│Omlet Creators") || message.member.roles.cache.some(r => r.name === "🎲│Co-Owner") || message.member.roles.cache.some(r => r.name === "🔒│Admin") || message.member.roles.cache.some(r => r.name === "👤│Member")) return;
                  message.member.setNickname(`〔🔨〕${message.author.username}`);
               }
              if(message.member.roles.cache.some(r => r.name === "🔒│Admin") && message.member.id !== OwnerID) {
                   if(message.member.roles.cache.some(r => r.name === "🎲│Omlet Creators") || message.member.roles.cache.some(r => r.name === "🎲│Co-Owner") || message.member.roles.cache.some(r => r.name === "👤│Member") || message.member.roles.cache.some(r => r.name === "🔨│Mod")) return;
                   message.member.setNickname(`〔🥩〕${message.author.username}`);
               }
               if(message.member.roles.cache.some(r => r.name === "🎲│Omlet Creators") && message.member.id !== OwnerID) {
                   if(message.member.roles.cache.some(r => r.name === "🔒│Admin") || message.member.roles.cache.some(r => r.name === "🎲│Co-Owner") || message.member.roles.cache.some(r => r.name === "👤│Member") || message.member.roles.cache.some(r => r.name === "🔨│Mod")) return;
                   message.member.setNickname(`〔🎲〕${message.author.username}`);
                }
            }
           if(message.mentions.has(client.user.id)) {
       	     message.delete();
                message.reply("เลิกแทกกูได้แล้วไอสลัดผัก").then(message => {
                  setTimeout(() => message.delete(), 10000)
              })
           };
           if(message.content === "h!RestartMusic" && message.member.id === OwnerID) {
               let channel = message.member.voice.channel;
               if(!message.guild.me.voice.channel) { 
                  message.channel.send(">>> กำลัง Restart ระบบเพลงคาเฟ่ค่ะ")
                  RestartCafeMusic = 1;
                }
                if(message.guild.me.voice.channel) {
                    channel.leave();
                    message.channel.send(">>> กำลัง Restart ระบบเพลงคาเฟ่ค่ะ")
                    RestartCafeMusic = 1;
                 }
             }
             if(message.content === "h!help") {
                 message.channel.send(">>> คำสั่งทั้งหมดของหนู\nh!volume low\nh!volume mid\nh!ping\nh!bf\nh!restart\nh!RestartMusic")
              } 
              if(message.content === "h!volume low" || message.content === "h!vol low"){
         	     let channel = message.member.voice.channel;
        	      if(!message.guild.me.voice.channel) { 
       	          message.channel.send(">>> หนูได้ปรับเสียงให้แล้วค่ะ")
                     CafeMusicVolume = 0.06;
                     RestartCafeMusic = 1;
                  }
                  if(message.guild.me.voice.channel) {
                      channel.leave();
                      message.channel.send(">>> หนูได้ปรับเสียงให้แล้วค่ะ")
                      CafeMusicVolume = 0.06;
                      RestartCafeMusic = 1;
                  }
              }
              if(message.content === "h!volume mid" || message.content === "h!vol mid"){
            	  let channel = message.member.voice.channel;
                  if(!message.guild.me.voice.channel) { 
       	           message.channel.send(">>> หนูได้ปรับเสียงให้แล้วค่ะ")
                      CafeMusicVolume = 0.1;
                      RestartCafeMusic = 1;
                   }
                   if(message.guild.me.voice.channel) {
                       channel.leave();
                       message.channel.send(">>> หนูได้ปรับเสียงให้แล้วค่ะ")
                       CafeMusicVolume = 0.1;
                       RestartCafeMusic = 1;
                    }
                }
                if(message.channel.id === VerifyRoom && message.content === "h!verify") {
                	const channel = message.guild.channels.cache.find(c => c.id === Log);
                    const verifyRole = message.guild.roles.cache.find(role => role.name === VerifyRole);
                    message.delete();
                    if(!verifyRole) {
       	             message.channel.send(`>>> **คุณ** ${message.member.displayName} **ได้รับการยืนยันแล้วค่ะ**`);
                        message.member.roles.add(verifyRole);
                        channel.send(`>>> คุณ ${message.member.displayName} ได้ยืนยันแล้ว`).then(message => {
                            setTimeout(() => message.delete(), 10000)
                        })
                    } else if(verifyRole) {
                        message.channel.send(`>>> คุณ ${message.member.displayName} **คุณได้ยืนยันอยู่แล้วค่ะ**`).then(message => {
                            setTimeout(() => message.delete(), 10000)
                        })
                    }
                }
                if(message.channel.id === CafeRoom) {
          	      if(message.content === "สั่งกาแฟ") {
          	         if(ServerMoney < 40) return message.reply(`คุณมีเงินไม่ถึง 40$ คุณไม่สามารถซื้อได้ ตอนนี้เงินเซิฟเหลือ ${ServerMoney}$`)
                       if(CafeCustomer === "no") {
                            message.channel.send(`>>> โปรดรอสักครู่ค่ะ คุณ ${message.member.displayName}`).then(message => {
                                setTimeout(() => message.delete(), 10000)
                            })
                            let Now = ServerMoney - 40;
                            ServerMoney = Now;
                            CafeCustomer = message.member.displayName;
                            const verifyRole = message.guild.roles.cache.find(role => role.name === HaveCoffeeRole);
                            message.member.roles.add(verifyRole);
                       } else if(CafeCustomer !== "no") {
              	          message.channel.send(`>>> โปรดรอสักครู่ค่ะ กำลังทำให้กาแฟคุณ ${CafeCustomer}`).then(message => {
                            setTimeout(() => message.delete(), 10000)
                       })
                   }
               }
           }
            if(message.content === "ดื่มกาแฟ") {
           	 if(message.member.roles.cache.some(role => role.name === HaveCoffeeRole)) {
                    message.delete();
                    message.channel.send(`>>> คุณ ${message.member.displayName} กำลังดื่มกาแฟ`).then(message => {
                        setTimeout(() => message.channel.send(`>>> คุณดื่มกาแฟหมดแล้ว`), 10000)
                     }).then(message => {
                         setTimeout(() => message.delete(), 10000)
                     })
                   }
                   if(!message.member.roles.cache.some(role => role.name === HaveCoffeeRole)) {
                  	message.delete();
                      message.channel.send(`>>> คุณยังไม่ได้ซื้อกาแฟค่ะ โปรดซื้อก่อนที่จะดื่มนะคะ`).then(message => {
                           setTimeout(() => message.delete(), 10000)
                      })
                  }
              } 
       } catch(e) {
          const channel = message.guild.channels.cache.find(c => c.id === Log);
          channel.send('> หนูมีปัญหา\n ```' + e +'\n```')
       }
  });
