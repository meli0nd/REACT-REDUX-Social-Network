"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[752],{1468:function(s,t,e){e.d(t,{D:function(){return u}});var r=e(8683),i=(e(2791),e(8687)),n=e(7689),o=e(184),a=function(s){return{isAuth:s.auth.isAuth}},u=function(s){return(0,i.$j)(a)((function(t){return t.isAuth?(0,o.jsx)(s,(0,r.Z)({},t)):(0,o.jsx)(n.Fg,{to:"/login"})}))}},752:function(s,t,e){e.r(t),e.d(t,{default:function(){return J}});var r=e(5671),i=e(3144),n=e(136),o=e(516),a=e(8683),u=e(2791),c=e(6868),l="MyPosts_postsBlock__oMh4e",d="MyPosts_posts__akUw3",f="Post_item__TJtwx",h=e(184),p=function(s){return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("img",{src:"https://avatars.mds.yandex.net/i?id=d00a6fb936bd9fff05de6cabc7c4ccfc3d705469-8399918-images-thumbs&n=13",alt:"..."}),s.message,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["Like: ",s.likesCount]})})]})},x=e(6139),j=e(704),v=e(7492),m=u.memo((function(s){var t=s.posts.map((function(s){return(0,h.jsx)(p,{message:s.post,likesCount:s.likesCount},s.id)}));return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(b,{onSubmit:function(t){var e=t.postText;s.addPostFunc(e)}}),(0,h.jsx)("div",{className:d,children:t})]})})),b=(0,j.Z)({form:"newPostText"})((function(s){return(0,h.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(x.Z,{name:"postText",placeholder:"Add new post",component:v.gx})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),P=m,g=e(8687),k=(0,g.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPostFunc:function(t){s((0,c.Wl)(t))}}}))(P),S=e(9439),I=e(5987),A={descriptionBlock:"ProfileInfo_descriptionBlock__xBY7d",userProfileAvatar:"ProfileInfo_userProfileAvatar__FnGsK"},Z=e(9346),y=e(9624),U=function(s){var t=(0,u.useState)(!1),e=(0,S.Z)(t,2),r=e[0],i=e[1],n=(0,u.useState)(s.status),o=(0,S.Z)(n,2),a=o[0],c=o[1];return(0,u.useEffect)((function(){c(s.status)}),[s.status]),(0,h.jsxs)("div",{children:[!r&&(0,h.jsx)("div",{children:(0,h.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[(0,h.jsx)("b",{children:"Status"}),": ",s.status||"The status is not set"]})}),r&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(s){c(s.currentTarget.value)},onBlur:function(){i(!1),s.updateUserStatus(a)},autoFocus:!0,value:a})})]})},_=e(9234),w=(0,j.Z)({form:"editProfile"})((function(s){var t=s.handleSubmit,e=s.profile,r=s.error;return(0,h.jsxs)("form",{onSubmit:t,children:[(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Save"})}),r&&(0,h.jsx)("div",{className:_.Z.formSummaryError,children:r}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"Name"}),": ",(0,v.Gr)("Name","fullName",[],v.II)," "]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"About me"}),": ",(0,v.Gr)("About me","aboutMe",[],v.II)]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"Looking for a job"}),": ",(0,v.Gr)("Looking for a job","lookingForAJob",[],v.II,{type:"checkbox"})]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"Professional skills"}),": ",(0,v.Gr)("Professional skills","lookingForAJobDescription",[],v.gx)]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.data.contacts).map((function(s){return(0,h.jsx)("div",{children:(0,h.jsxs)("b",{children:[s,": ",(0,v.Gr)(s,"contacts."+s,[],v.II)]})},s)}))," "]})]})})),T=["profile","status","updateUserStatus","isOwner","savePhoto","saveProfile"],C=function(s){var t=s.contactTitle,e=s.contactValue;return(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:t}),": ",e]})},N=function(s){var t=s.profile,e=s.isOwner,r=s.goToEditMode;return(0,h.jsxs)("div",{children:[e&&(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:r,children:"Edit"})}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"Name"}),":  ",t.data.fullName]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"About me"}),": ",t.data.aboutMe]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"Looking for a job"}),": ",t.data.lookingForAJob?"yes":"no"]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"About job"}),": ",t.data.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.data.contacts).map((function(s){return(0,h.jsx)(C,{contactTitle:s,contactValue:t.data.contacts[s]},s)}))," "]})]})},O=function(s){var t=s.profile,e=s.status,r=s.updateUserStatus,i=s.isOwner,n=s.savePhoto,o=s.saveProfile,a=((0,I.Z)(s,T),(0,u.useState)(!1)),c=(0,S.Z)(a,2),l=c[0],d=c[1];if(!t)return(0,h.jsx)(Z.Z,{});var f=t.data.photos.small;return(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:A.descriptionBlock,children:(0,h.jsxs)("div",{className:A.profileInfo,children:[(0,h.jsx)("img",{className:A.userProfileAvatar,src:f||y,alt:"..."}),i&&(0,h.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&n(s.target.files[0])}}),l?(0,h.jsx)(w,{profile:t,onSubmit:function(s){o(s).then((function(){d(!1),r(e)}))},initialValues:t.data}):(0,h.jsx)(N,{profile:t,isOwner:i,goToEditMode:function(){d(!0)}}),(0,h.jsx)(U,{status:e,updateUserStatus:r})]})})})},F=function(s){return(0,h.jsxs)("div",{children:[(0,h.jsx)(O,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,updateUserStatus:s.updateUserStatus,saveProfile:s.saveProfile}),(0,h.jsx)(k,{profile:s.profile})]})},M=e(7689),B=e(27),D=e(7781);e(1468);var G=function(s){(0,n.Z)(e,s);var t=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"refreshProfile",value:function(){var s=this.props.router.params.userId;s||(s=this.props.authorizedUserId)||(0,B.uX)("/login"),this.props.getUserProfile(s),this.props.getUserStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,t){this.props.router.params.userId!=s.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(F,(0,a.Z)((0,a.Z)({},this.props),{},{savePhoto:this.props.savePhoto,isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus}))}}]),e}(u.Component),J=(0,D.qC)((0,g.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:c.et,getUserStatus:c.Tq,updateUserStatus:c.OL,savePhoto:c.Ju,saveProfile:c.Ii}),(function(s){return function(t){var e=(0,M.TH)(),r=(0,M.s0)(),i=(0,M.UO)();return(0,h.jsx)(s,(0,a.Z)((0,a.Z)({},t),{},{router:{location:e,navigate:r,params:i}}))}}))(G)}}]);
//# sourceMappingURL=752.94ce93b8.chunk.js.map