﻿/*本部分保存timeline基础模板
let trialname={
	type:'',
	choices:'',
	timeline:[
		{
			stimulus:jsPsych.timelineVariable('content'),
		},
	{}],
	timeline_variables:[{content:''},{}],
	loop_function:function(){
		
	}
}
*/
//推荐使用“alt+0”折叠所有代码块，然后需要时再展开“alt+shift+0”


//生成字母搜索任务的矩阵
function character_matrix(){
	let char_matrix=['',''];
	let charStr='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (var i=0;i<16;i++)
		{ 
			let char_random=charStr.charAt(Math.round(Math.random()*25));
			char_matrix[0]+=`<div class="char_block">${char_random}</div>`;       //每个字母矩阵由16个字母块组成，每个字母块随机显示字母内容
			char_matrix[1]+=char_random;                                          //保留16个字母的内容，以判断被试是否搜索正确
		}
	if (char_matrix[1].indexOf('R')!=-1){
		char_matrix[1]='f';
	}
	else{
		char_matrix[1]='j';
	}
	return char_matrix;
}

//CNI实验材料，由于浏览器无法自由读取本地文件，因此只好将文字全写入js中
//这部分强烈建议折叠
var CNI_material=[
	{
    story: "你是国家的总统。一个在冲突区活动的游击队绑架了一名你国家的记者，并威胁如果你的政府不支付一百万美元的赎金，就要斩首他。\n该组织将使用赎金购买用于游击战的武器，这将导致许多人的死亡。国会已批准支付赎金，但你有权否决付款。",
    question: "在这种情况下否决支付赎金是否可以接受？"
  },
  {
    story: "你是一个小医院的外科医生。一天，你的医院接收了五名车祸中重伤的病人。这些病人都需要器官移植，否则他们会死。\n你没有备用的器官，但有一个病人已经昏迷了几周，似乎不太可能再醒来。你可以终止他的生命支持，取用他的器官来救这五个事故受害者的生命。",
    question: "在这种情况下终止该病人的生命支持以取用他的器官是否可接受？"
  },
  {
    story: "你是一个特警部门的成员，受过处理特别困难案件的培训。你正在处理一个涉及一名成年男性的案件，该男性被指控绑架了几名儿童。你不知道他把孩子们藏在哪里，他也拒绝告诉你他们的下落。\n如果在接下来的24小时内找不到孩子们，他们很可能会因为脱水而死亡。你已经尝试了所有合法的审讯技术，但都没有成功。为了获得孩子们的下落信息，你考虑使用被视为酷刑的非法手段。",
    question: "在这种情况下，使用非法审讯是否可以接受？"
  },
  {
    story: "你是一名医生，正在治疗一名患有严重疾病且处于极度痛苦中的病人。即使是最强效的药物也无法再缓解他的疼痛。他感到极度痛苦，并且你知道他的病情永远不会好转。多日来，他一直在等待情况发生变化。\n由于他不再想忍受痛苦，他多次请求你结束他的生命。你可以给他注射一种致命药物，从而使他解脱痛苦。",
    question: "在这种情况下，给你的病人注射这种药物是可以接受的吗？"
  },
  {
    story: "你是一家医院的院长，该医院所在国家医疗资源相对贫乏。一名在该国做志愿者的外国学生感染了一种罕见病毒。该病毒具有高度传染性，对老年人和儿童具有致命性。\n唯一能有效阻止病毒传播的药物有严重的副作用。虽然病毒不会杀死她，但该学生患有慢性免疫缺陷，这会使她因这些副作用而死亡。",
    question: "在这种情况下，对学生施以该药物治疗是可以接受的吗？"
  },
  {
    story: "你是一名医生，所在地区爆发了一种高度传染的疾病。初步测试显示一种新疫苗非常成功，但由于其严重的副作用，尚未得到本国卫生部门的批准。\n这种疫苗的副作用可能会导致数十名未感染者的死亡，但该疫苗将通过防止病毒传播拯救数百人的生命。",
    question: "在这种情况下，使用该疫苗是可以接受的吗？"
  },
  {
    story: "你是一家治疗严重肾病患者的透析诊所的主任。你正在处理一名女性患者的病例，她患有肾功能障碍，并因在当地餐馆用餐而食物中毒。要清除她血液中的毒素，她需要不间断的24小时透析治疗，而不是其他患者通常需要的4小时透析治疗。\n如果这名女性不能完成24小时的治疗，她血液中的毒素会对她的器官造成不可逆的损伤，并导致她死亡。她已经接受了30分钟的治疗，但你还有六名患者需要他们的常规4小时透析治疗，而现在你只有一台透析机。如果这些患者在24小时内没有接受常规治疗，他们的内脏也会遭受类似的致命损伤。",
    question: "在这种情况下，停止该女性患者的24小时透析治疗是可以接受的吗？"
  },
  {
    story: "你是一名建筑工人，在一位富裕且有权势的投资者的新高层建筑工地上工作。这个人以不光彩的手段增加他的财富。具体来说，他雇人纵火，以便赶走租户并将建筑物改造成豪华物业。在几个案例中，租户受重伤或死亡，但检察官无法将他定罪。\n某日，当你和这个人在建筑物顶部时，你看到有机会将他推下去。这栋建筑足够高，足以让他摔死，这样可以防止他对无辜的租户造成更多的伤害。没有人在旁边看到发生的事情，他的死亡看起来像是意外。",
    question: "在这种情况下，推这个投资者掉下房顶是可以接受的吗？"
  },
  {
    story: "你是一家餐馆的主厨，所在的南美国家由一位有争议的总统统治。自从他上台以来，他一直试图镇压任何反对声音。许多敢于反对他的人突然“失踪”，后来他们的尸体被发现于乱葬坑中。\n这位总统要来你工作的餐馆用餐。你知道他对花生高度过敏，可以在他的菜里加入少量的花生油。虽然这个量小得不易察觉，但足以致命，从而为你的国家带来一个新的政治时代。",
    question: "在这种情况下，在菜肴中加入花生油是可以接受的吗？"
  },
  {
    story: "你是一个外国某发展援助团队的项目负责人，当地民族冲突开始升级。多数民族成员迫害少数民族成员。你的一名少数民族雇员在目睹一位同事被多数民族武装团体杀害后，来到你的团队中心。不久之后，这个武装团体聚集在你的中心前。\n如果你不交出这名雇员的话，他们威胁要拦下一辆即将到来的巴士并杀死所有属于少数民族的乘客。如果你交出你的雇员，他将被武装团体枪杀。",
    question: "在这种情况下，将该雇员交给这个武装团体是否可以接受？"
  },
  {
    story: "你的母亲在五年前出了车祸，这对你的家庭来说是一个痛苦且情感上令人疲惫的经历。自那时起，她一直处于持续的植物人状态。由于她大脑的大片区域已永久损伤，她没有恢复的可能。\n因此，她经历着严重的慢性疼痛，却无法与人沟通。然而，尽管你的母亲处于这种状态，她可能还会再活20到30年。你的母亲通过自动药物分配器接受多种药物。如果药物过量会导致心力衰竭，使你的母亲死亡，而没有人会注意到她不是自然死亡。",
    question: "在这种情况下，设置药物分配器过量供给药物给你的母亲是否可接受？"
  },
  {
    story: "你是纳粹占领荷兰期间的一名教会官员。你与占领军有一份正式协议，协议保护所有在你照顾下的人。你公开为一个已被保护的犹太家庭发声，惹恼了纳粹。\n为了展示他们的权力，纳粹要求你交出这个犹太家庭的成员，之后这个犹太家庭将会被纳粹杀害。如果你执意要保护该犹太家庭，他们将处决几十名因政治原因被监禁的荷兰人。",
    question: "在这种情况下，交出这个犹太家庭的成员是否可接受？"
  },
  {
    story: "你是国家的总统。一个在冲突区活动的游击队绑架了一名你国家的记者，并威胁如果你的政府不支付一百万美元的赎金，就要斩首他。\n该组织将使用赎金为他们的家人购买食品，这些家人生活在一个长期受干旱影响的地区。国会已批准支付赎金，但你有权否决付款。",
    question: "在这种情况下否决支付赎金是否可以接受？"
  },
  {
    story: "你是一个小医院的外科医生。一天，你的医院接收了五名车祸中重伤的病人。这些病人都需要器官移植，否则他们将终生有严重的健康问题。\n你没有备用的器官，但有一个病人已经昏迷了几周，似乎不太可能再醒来。你可以终止他的生命支持，取用他的器官，以避免这五个事故受害者终生有健康问题。",
    question: "在这种情况下终止该病人的生命支持以取用他的器官是否可接受？"
  },
  {
    story: "你是一个特警部门的成员，受过处理特别困难案件的培训。你正在处理一个涉及一名成年男性的案件，该男性被指控偷窃了几幅画作。你不知道他把画藏在哪里，他也拒绝告诉你画的下落。\n如果在接下来的24小时内找不到这些画作，它们很可能会被运送到另一个国家。你已经尝试了所有合法的审讯技术，但都没有成功。为了获得画作的下落信息，你考虑使用被视为酷刑的非法手段。",
    question: "在这种情况下，使用非法审讯是否可以接受？"
  },
  {
    story: "你是一名医生，正在治疗一名患有严重疾病且处于极度痛苦中的病人。即使是最强效的药物也无法再缓解他的疼痛。他感到极度痛苦，但你知道他的病情会好转。多日来，他一直在等待情况发生变化。\n由于他不再想忍受痛苦，他多次请求你结束他的生命。你可以给他注射一种致命药物，从而使他解脱痛苦。",
    question: "在这种情况下，给你的病人注射这种药物是可以接受的吗？"
  },
  {
    story: "你是一家医院的院长，该医院所在国家医疗资源相对贫乏。一名在该国做志愿者的外国学生感染了一种罕见病毒。该病毒具有高度传染性，并可能引起严重的胃痉挛。\n唯一能有效阻止病毒传播的药物有严重的副作用。虽然病毒不会杀死她，但该学生患有慢性免疫缺陷，这会使她因这些副作用而死亡。",
    question: "在这种情况下，对学生施以该药物治疗是可以接受的吗？"
  },
  {
    story: "你是一名医生，所在地区爆发了一种高度传染的疾病。初步测试显示一种新疫苗非常成功，但由于其严重的副作用，尚未得到本国卫生部门的批准。\n这种疫苗的副作用可能会导致数十名未感染者的死亡，但该疫苗将通过防止病毒传播拯救相同数量的生命。",
    question: "在这种情况下，使用该疫苗是可以接受的吗？"
  },
  {
    story: "你是一家治疗严重肾病患者的透析诊所的主任。你正在处理一名女性患者的病例，她患有肾功能障碍，并因在当地餐馆用餐而食物中毒。要清除她血液中的毒素，她需要不间断的24小时透析治疗，而不是其他患者通常需要的4小时透析治疗。\n如果这名女性不能完成24小时的治疗，她血液中的毒素会对她的器官造成不可逆的损伤，并导致她死亡。她已经接受了30分钟的治疗，但你还有六名患者需要他们的常规4小时透析治疗，而现在你只有一台透析机。如果这些患者在24小时内没有接受常规治疗，他们可能会在接下来的两天内感到严重的恶心。",
    question: "在这种情况下，停止该女性患者的24小时透析治疗是可以接受的吗？"
  },
  {
    story: "你是一名建筑工人，在一位富裕且有权势的投资者的新高层建筑工地上工作。这个人以不光彩的手段增加他的财富。具体来说，他贿赂官员，以便赶走租户并将建筑物改造成豪华物业。在几个案例中，租户无法找到可比的替代住处，但检察官无法将他定罪。\n某日，当你和这个人在建筑物顶部时，你看到有机会将他推下去。这栋建筑足够高，足以让他摔死，这样可以防止他对无辜的租户造成更多的伤害。没有人在旁边看到发生的事情，他的死亡看起来像是意外。",
    question: "在这种情况下，推这个投资者掉下房顶是可以接受的吗？"
  },
  {
    story: "你是一家餐馆的主厨，所在的南美国家由一位有争议的总统统治。自从他上台以来，他一直试图镇压任何反对声音。许多敢于反对他的人失去了工作，现在不得不以更低的工资工作。\n这位总统要来你工作的餐馆用餐。你知道他对花生高度过敏，可以在他的菜里加入少量的花生油。虽然这个量小得不易察觉，但足以致命，从而为你的国家带来一个新的政治时代。",
    question: "在这种情况下，在菜肴中加入花生油是可以接受的吗？"
  },
  {
    story: "你是一个外国某发展援助团队的项目负责人，当地民族冲突开始升级。多数民族成员迫害少数民族成员。你的一名少数民族雇员在目睹一位同事被多数民族武装团体杀害后，来到你的团队中心。不久之后，这个武装团体聚集在你的中心前。\n如果你不交出这名雇员的话，他们威胁要烧毁停在你们中心前的一辆团队车辆。如果你交出你的雇员，他将被武装团体枪杀。",
    question: "在这种情况下，将该雇员交给这个武装团体是否可以接受？"
  },
  {
    story: "你的母亲在五年前出了车祸，这对你的家庭来说是一个痛苦且情感上令人疲惫的经历。自那时起，她部分瘫痪。由于组织已经永久损伤，她没有恢复的可能。\n因此，她余生都需要轮椅。然而，你的母亲已很好地适应了她的状况，她可能还会再活20到30年。你的母亲通过自动药物分配器接受多种药物。如果药物过量会导致心力衰竭，使你的母亲死亡，而没有人会注意到她不是自然死亡。",
    question: "在这种情况下，设置药物分配器过量供给药物给你的母亲是否可接受？"
  },
  {
    story: "你是纳粹占领荷兰期间的一名教会官员。你与占领军有一份正式协议，协议保护所有在你照顾下的人。你公开为一个已被保护的犹太家庭发声，惹恼了纳粹。\n为了展示他们的权力，纳粹要求你交出这个犹太家庭的成员，之后这个犹太家庭将会被纳粹杀害。如果你执意要保护该犹太家庭，他们将只驱逐这个家庭，他们必须在24小时内离开这个国家。",
    question: "在这种情况下，交出这个犹太家庭的成员是否可接受？"
  },
  {
    story: "你是国家的总统。一个在冲突区活动的游击队绑架了一名你国家的记者，并威胁如果你的政府不支付一百万美元的赎金，就要斩首他。\n该组织将使用赎金为他们的家人购买食品，这些家人生活在一个长期受干旱影响的地区。作为总统，你有权批准支付赎金。",
    question: "在这种情况下批准支付赎金是否可以接受？"
  },
  {
    story: "你是一个小医院的外科医生。一天，你的医院接收了五名车祸中重伤的病人。这些病人都需要器官移植，否则他们将终生有严重的健康问题。\n你没有备用的器官，但有一个病人已经昏迷了几周，似乎不太可能再醒来。你的一名同事计划终止他的生命支持，取用他的器官，以避免这五个事故受害者终生有健康问题。你可以通过通知医院主管来阻止你的同事。",
    question: "在这种情况下，阻止你的同事终止病人的生命支持以取用病人器官是否可以接受？"
  },
  {
    story: "你是一个特警部门的成员，受过处理特别困难案件的培训。你正在处理一个涉及一名成年男性的案件，该男性被指控偷窃了几幅画作。你不知道他把画藏在哪里，他也拒绝告诉你画的下落。\n如果在接下来的24小时内找不到这些画作，它们很可能会被运送到另一个国家。你已经尝试了所有合法的审讯技术，但都没有成功。为了获得画作的下落信息，你的同事开始使用被视为酷刑的非法手段，你考虑通过向上级报告来阻止他。",
    question: "在这种情况下，阻止你的同事使用非法审讯是否可以接受？"
  },
  {
    story: "你是一名医生，正在治疗一名患有严重疾病且处于极度痛苦中的病人。即使是最强效的药物也无法再缓解他的疼痛。他感到极度痛苦，但你知道他的病情会好转。多日来，他一直在等待情况发生变化。\n由于他不再想忍受痛苦，他多次请求你结束他的生命。突然，他出现了严重的心脏病发作。你可以给他注射一种药物，救他免于死亡。",
    question: "在这种情况下，给你的病人注射这种药物是可以接受的吗？"
  },
  {
    story: "你是一家医院的院长，该医院所在国家医疗资源相对贫乏。一名在该国做志愿者的外国学生感染了一种罕见病毒。该病毒具有高度传染性，并可能引起严重的胃痉挛。\n如果不送她回国接受特殊治疗，她会因病毒而死亡。然而，解除隔离带她出去会有相当大的病毒传播的风险。",
    question: "在这种情况下，解除学生的隔离，让她重返回国接受治疗是可以接受的吗？"
  },
  {
    story: "你是一名医生，所在地区爆发了一种高度传染的疾病。初步测试显示一种新疫苗非常成功，但由于其严重的副作用，尚未得到本国卫生部门的批准。\n这种疫苗的副作用可能会导致数十名未感染者的死亡，但该疫苗将通过防止病毒传播拯救相同数量的生命。你的一位同事计划使用这种疫苗，但你可以通过向卫生部门报告他的计划来阻止他。",
    question: "在这种情况下，阻止你的同事是可以接受的吗？"
  },
  {
    story: "你是一家治疗严重肾病患者的透析诊所的主任。你正在处理一名女性患者的病例，她患有肾功能障碍，并因在当地餐馆用餐而食物中毒。要清除她血液中的毒素，她需要不间断的24小时透析治疗，而不是其他患者通常需要的4小时透析治疗。\n如果这名女性不能完成24小时的治疗，她血液中的毒素会对她的器官造成不可逆的损伤，并导致她死亡。你还有六名患者需要他们的常规4小时透析治疗，而现在你只有一台透析机。如果这些患者在24小时内没有接受常规治疗，他们可能会在接下来的两天内感到严重的恶心。",
    question: "在这种情况下，开始该女性患者的24小时透析治疗是可以接受的吗？"
  },
  {
    story: "你是一名建筑工人，在一位富裕且有权势的投资者的新高层建筑工地上工作。这个人以不光彩的手段增加他的财富。具体来说，他贿赂官员，以便赶走租户并将建筑物改造成豪华物业。在几个案例中，租户无法找到可比的替代住处，但检察官无法将他定罪。\n某日，当你和这个人在建筑物顶部时，他滑倒了，如果你不拉住他，他将从建筑物上摔下去。这栋建筑足够高，足以让他摔死，这样可以防止他对无辜的租户造成更多的伤害。没有人在旁边看到发生的事情，他的死亡看起来像是意外。",
    question: "在这种情况下，拉住这个投资者是可以接受的吗？"
  },
  {
    story: "你是一家餐馆的主厨，所在的南美国家由一位有争议的总统统治。自从他上台以来，他一直试图镇压任何反对声音。许多敢于反对他的人失去了工作，现在不得不以更低的工资工作。\n这位总统要来你工作的餐馆用餐。你知道他对花生高度过敏，并注意到一名服务员不小心把他的无花生菜肴和含少量花生油的菜肴混淆了。虽然这个量小得不易察觉，但足以致命，从而为你的国家带来一个新的政治时代。",
    question: "在这种情况下，阻止服务员上含花生油的菜肴是可以接受的吗？"
  },
  {
    story: "你是一个外国某发展援助团队的项目负责人，当地民族冲突开始升级。多数民族成员迫害少数民族成员。你的一名少数民族雇员在目睹一位同事被多数民族武装团体杀害后，来到你的团队中心。不久之后，这个武装团体聚集在你的中心前。\n如果你不交出这名雇员的话，他们威胁要烧毁停在你们中心前的一辆团队车辆。如果你交出你的雇员，他将被武装团体枪杀。你知道在你们中心有一条秘密隧道，可以让你的雇员安全逃脱。",
    question: "在这种情况下，让该雇员从秘密隧道逃离是否可接受？"
  },
  {
    story: "你的母亲在五年前出了车祸，这对你的家庭来说是一个痛苦且情感上令人疲惫的经历。自那时起，她部分瘫痪。由于组织已经永久损伤，她没有恢复的可能。\n因此，她余生都需要轮椅。然而，你的母亲已很好地适应了她的状况，她可能还会再活20到30年。你的母亲通过自动药物分配器接受多种药物。你注意到分配器发生故障，已经给了她超出应给量的药物。如果药物过量会导致心力衰竭，使你的母亲死亡。",
    question: "在这种情况下，阻止药物分配器供给过量的药物给你母亲是否可接受？"
  },
  {
    story: "你是纳粹占领荷兰期间的一名教会官员。你与占领军有一份正式协议，协议保护所有在你照顾下的人。纳粹已经开始将你所在镇的所有犹太公民驱逐到集中营。\n一个犹太家庭请求你在教堂里保护他们免遭驱逐。根据以往的经验，你知道纳粹会对你保护这个犹太家庭的行为做出反应，将这个家庭驱逐出境，他们必须在24小时内离开这个国家。",
    question: "在这种情况下，保护这个犹太家庭是否可接受？"
  },
  {
    story: "你是国家的总统。一个在冲突区活动的游击队绑架了一名你国家的记者，并威胁如果你的政府不支付一百万美元的赎金，就要斩首他。\n该组织将使用赎金购买用于游击战的武器，这将导致许多人的死亡。作为总统，你有权批准支付赎金。",
    question: "在这种情况下批准支付赎金是否可以接受？"
  },
  {
    story: "你是一个小医院的外科医生。一天，你的医院接收了五名车祸中重伤的病人。这些病人都需要器官移植，否则他们会死。\n你没有备用的器官，但有一个病人已经昏迷了几周，似乎不太可能再醒来。你的一名同事计划终止他的生命支持，取用他的器官来救这五个事故受害者的生命。你可以通过通知医院主管来阻止你的同事。",
    question: "在这种情况下，阻止你的同事终止病人的生命支持以取用病人器官是否可以接受？"
  },
  {
    story: "你是一个特警部门的成员，受过处理特别困难案件的培训。你正在处理一个涉及一名成年男性的案件，该男性被指控绑架了几名儿童。你不知道他把孩子们藏在哪里，他也拒绝告诉你他们的下落。\n如果在接下来的24小时内找不到孩子们，他们很可能会因为脱水而死亡。你已经尝试了所有合法的审讯技术，但都没有成功。为了获得孩子们的下落信息，你的同事开始使用被视为酷刑的非法手段，你考虑通过向上级报告来阻止他。",
    question: "在这种情况下，阻止你的同事使用非法审讯是否可以接受？"
  },
  {
    story: "你是一名医生，正在治疗一名患有严重疾病且处于极度痛苦中的病人。即使是最强效的药物也无法再缓解他的疼痛。他感到极度痛苦，并且你知道他的病情永远不会好转。多日来，他一直在等待情况发生变化。\n由于他不再想忍受痛苦，他多次请求你结束他的生命。突然，他出现了严重的心脏病发作。你可以给他注射一种药物，救他免于死亡。",
    question: "在这种情况下，给你的病人注射这种药物是可以接受的吗？"
  },
  {
    story: "你是一家医院的院长，该医院所在国家医疗资源相对贫乏。一名在该国做志愿者的外国学生感染了一种罕见病毒。该病毒具有高度传染性，对老年人和儿童具有致命性。\n如果不送她回国接受特殊治疗，她会因病毒而死亡。然而，解除隔离带她出去会有相当大的病毒传播的风险。",
    question: "在这种情况下，解除学生的隔离，让她重返回国接受治疗是可以接受的吗？"
  },
  {
    story: "你是一名医生，所在地区爆发了一种高度传染的疾病。初步测试显示一种新疫苗非常成功，但由于其严重的副作用，尚未得到本国卫生部门的批准。\n这种疫苗的副作用可能会导致数十名未感染者的死亡，但该疫苗将通过防止病毒传播拯救数百人的生命。你的一位同事计划使用这种疫苗，但你可以通过向卫生部门报告他的计划来阻止他。",
    question: "在这种情况下，阻止你的同事是可以接受的吗？"
  },
  {
    story: "你是一家治疗严重肾病患者的透析诊所的主任。你正在处理一名女性患者的病例，她患有肾功能障碍，并因在当地餐馆用餐而食物中毒。要清除她血液中的毒素，她需要不间断的24小时透析治疗，而不是其他患者通常需要的4小时透析治疗。\n如果这名女性不能完成24小时的治疗，她血液中的毒素会对她的器官造成不可逆的损伤，并导致她死亡。她已经接受了30分钟的治疗，但你还有六名患者需要他们的常规4小时透析治疗，而现在你只有一台透析机。如果这些患者在24小时内没有接受常规治疗，他们的内脏也会遭受类似的致命损伤。",
    question: "在这种情况下，开始该女性患者的24小时透析治疗是可以接受的吗？"
  },
  {
    story: "你是一名建筑工人，在一位富裕且有权势的投资者的新高层建筑工地上工作。这个人以不光彩的手段增加他的财富。具体来说，他雇人纵火，以便赶走租户并将建筑物改造成豪华物业。在几个案例中，租户受重伤或死亡，但检察官无法将他定罪。\n某日，当你和这个人在建筑物顶部时，他滑倒了，如果你不拉住他，他将从建筑物上摔下去。这栋建筑足够高，足以让他摔死，这样可以防止他对无辜的租户造成更多的伤害。没有人在旁边看到发生的事情，他的死亡看起来像是意外。",
    question: "在这种情况下，拉住这个投资者是可以接受的吗？"
  },
  {
    story: "你是一家餐馆的主厨，所在的南美国家由一位有争议的总统统治。自从他上台以来，他一直试图镇压任何反对声音。许多敢于反对他的人突然“失踪”，后来他们的尸体被发现于乱葬坑中。这位总统要来你工作的餐馆用餐。\n你知道他对花生高度过敏，并注意到一名服务员不小心把他的无花生菜肴和含少量花生油的菜肴混淆了。虽然这个量小得不易察觉，但足以致命，从而为你的国家带来一个新的政治时代。",
    question: "在这种情况下，阻止服务员上含花生油的菜肴是可以接受的吗？"
  },
  {
    story: "你是一个外国某发展援助团队的项目负责人，当地民族冲突开始升级。多数民族成员迫害少数民族成员。你的一名少数民族雇员在目睹一位同事被多数民族武装团体杀害后，来到你的团队中心。不久之后，这个武装团体聚集在你的中心前。\n如果你不交出这名雇员的话，他们威胁要拦下一辆即将到来的巴士并杀死所有属于少数民族的乘客。如果你交出你的雇员，他将被武装团体枪杀。你知道在你们中心有一条秘密隧道，可以让你的雇员安全逃脱。",
    question: "在这种情况下，让该雇员从秘密隧道逃离是否可接受？"
  },
  {
    story: "你的母亲在五年前出了车祸，这对你的家庭来说是一个痛苦且情感上令人疲惫的经历。自那时起，她一直处于持续的植物人状态。由于她大脑的大片区域已永久损伤，她没有恢复的可能。\n因此，她经历着严重的慢性疼痛，却无法与人沟通。然而，尽管你的母亲处于这种状态，她可能还会再活20到30年。你的母亲通过自动药物分配器接受多种药物。你注意到分配器发生故障，已经给了她超出应给量的药物。如果药物过量会导致心力衰竭，使你的母亲死亡。",
    question: "在这种情况下，阻止药物分配器供给过量的药物给你母亲是否可接受？"
  },
  {
    story: "你是纳粹占领荷兰期间的一名教会官员。你与占领军有一份正式协议，协议保护所有在你照顾下的人。纳粹已经开始将你所在镇的所有犹太公民驱逐到集中营。\n一个犹太家庭请求你在教堂里保护他们免遭驱逐。根据以往的经验，你知道纳粹会对你保护这个犹太家庭的行为做出反应，处决几十名因政治原因被监禁的荷兰人。",
    question: "在这种情况下，保护这个犹太家庭是否可接受？"
  }
];

let jsPsych = initJsPsych();                                                    //初始化jspsych，未设置相关参数

//（2）实验介绍部分                                                             //（1）实验介绍部分           
let introduction_trial = {
	type: jsPsychInstructions,
	pages: [
	`<div class="title">欢迎来到本次实验!</div>
	<div>本次实验分为三个部分，接下来将逐一讲解三部分的内容，在讲解完毕后会进入练习环节！</div>`,
	'<div class="title">环节一：字母搜索任务</div>'+'<div class="main_text">该任务的目标判断出指定字母是否存在，在该部分会出现一个字母矩阵，你需要判断字母R是否包含在矩阵中。<br/>当你和同伴都完成该任务时会获得共同积分20，该积分和被试费相关。<br/></div>'+'<div><img align="center" border="0" src="./picture/matrix.png" alt="字母矩阵" width="500" ></div>',
	'<div class="title">环节二：积分分配环节</div>'+'<div class="main_text">将根据你和同伴在环节一的任务成绩判定谁为公共积分分配者。分配者可以将公共积分分配给自己和同伴。<br/></div>'+'<div><img align="center" border="0" src="./picture/dictator_game.png" alt="分配结果" width="700" ></div>',
	'<div class="title">环节三：情景故事</div>'+'<div class="main_text">在该环节，你需要将自己代入到故事情景中去，假如你是主人公，你会怎么办？<br/></div>'+'<div><img align="center" border="0" src="./picture/switch.png" alt="情景故事" width="400" ><br/></div>'+'<div class="main_text">你是否理解了本实验的三个部分？点击下一页将进入练习环节！！！</div>'
	],
	button_label_next: "下一页",
	button_label_previous: "上一页",
	show_clickable_nav: true
}                                                                                

//练习部分                                                                     //(2)练习环节
var practice_matrix=[].concat(character_matrix());
let practice_trial = {
	timeline:[
		{
			type: jsPsychCategorizeHtml,//字母搜索任务练习试次
			stimulus: `<div class="matrix_block">${practice_matrix[0]}</div>`,
			key_answer: practice_matrix[1],
			text_answer: 'letter',
			choices: ['f', 'j'],
			correct_text: '<div style="color: green;   align: center;" class="highlighten">正确，你判断对了！！</div>',
			incorrect_text: '<div style="color: red;  align: center;" class="highlighten">错误，你判断错了！！</div>',
			feedback_duration:2000,
			// prompt: '<div style="display:flex; flex-flow:row nowrap; align-items:baseline; justify-content:center;">你发现R时按<button class="styled-button">F</button>键，未发现时按<button class="styled-button">J</button>键</div>'
			prompt: '<div class="prompt">你发现R时按<button class="styled-button">F</button>键，未发现时按<button class="styled-button">J</button>键</div>'
		},
		{
			type: jsPsychSurveyHtmlForm,//独裁者范式练习试次
			preamble: '<div class="title">恭喜你们完成了合作任务，<br/>获得了共同积分<span style="color:red;">20</span>，<br/>现在将按照字母搜任务的成绩划分角色，分到分配者的人将会对共同积分进行分配</div>',
			html: '<div>你给自己分配的积分是<input type="text" id="self-box" name="self-score" size="10" /></div><div>你给队友分配的积分是<input type="text" id="teammate-box" name="teammate-score" size="10" /></div>'+'<b>以上是你担任分配者的情况，当你是接受者时，将只会等待并最终看到分配结果</b>',
			autofocus: 'self-box',
			button_label:"继续下一个环节"
		},
		{
			type:jsPsychHtmlKeyboardResponse,//CNI实验材料练习试次
			choices:['f','j'],
			stimulus:'<div class="story-box">假设在一个电车轨道上被绑了5个人，而它的备用轨道上被绑了1个人，又有一辆失控的电车飞速驶来，而你身边正好有一个摇杆，你可以推动摇杆来让电车驶入备用轨道，杀死那1个人，救下5个人。你也可以什么也不做，杀死5个人，救下1个人。眼看电车就要驶入那片区域了，你必须在很短的时间内做出决定，杀死1个人，救下5个人，还是杀死5个人，救下1个人</div>'+'<div class="question-box">问题是：你觉得此时推动摇杆是可以接受的吗？<br/>后续可接受都是按F键，不可接受按J键<div>',
			prompt:'<div class="prompt"><button class="styled-button">F</button><button class="styled-button">J</button></div>'
		}
	]
}         

var my_matrix=[];                                                               //（3）字母搜索任务部分
for (let i=0;i<10;i++){
	my_matrix.push(character_matrix());
}
var again=-1;
var introduction_charmatrix=`<div class="introductioncss"><div class="title">任务一介绍</div>
<div>接下来进行一个字母搜索任务，总共十轮。<br/>你需要判断<span style="color:red; size:50px;">字母R</span>是否包含在矩阵中，请尽可能快且准确，倘若判断错误你需要从头开始本次任务。</div>
<div>倘若你不是第一次看见这一屏，就只有一个解释，你又做错了</div>
<div>请注意，本轮成绩会决定下一个任务的角色分配，请认真！！！！</div>
<div class="styled-button">按空格键正式进入字母搜索任务</div></div>`;
//矩阵部分+往返逻辑
let charmatrix_trial={
	type:jsPsychHtmlKeyboardResponse,
	timeline:[                                                                 //此部分要使用循环函数，使用了大的timeline
		{
			timeline:[                                                         //此处嵌套一个timeline用于介绍字母搜索任务的要求，由于要使用conditional_function，哪怕只有一个试次也要使用timeline
				{
				stimulus:introduction_charmatrix,
				choices:' '
				}
			],
			conditional_function:function(){
				again++;
				return again%10==0;                                           //每十次显示一次前言介绍
			},
		},
		{
			stimulus: function(){ return "<div class='matrix_block'>"+jsPsych.timelineVariable('matrix')+"</div>";},                   
			choices:['f','j'],
			on_finish:function(data){
				if((jsPsych.timelineVariable('char'))==data.response  ){
					data.correct='true';
				}
				else{
					data.correct='false';
				}
			}
		}
	],
	timeline_variables:[
		{matrix:my_matrix[0][0],char:my_matrix[0][1]},
		{matrix:my_matrix[1][0],char:my_matrix[1][1]},
		{matrix:my_matrix[2][0],char:my_matrix[2][1]},
		{matrix:my_matrix[3][0],char:my_matrix[3][1]},
		{matrix:my_matrix[4][0],char:my_matrix[4][1]},
		{matrix:my_matrix[5][0],char:my_matrix[5][1]},
		{matrix:my_matrix[6][0],char:my_matrix[6][1]},
		{matrix:my_matrix[7][0],char:my_matrix[7][1]},
		{matrix:my_matrix[8][0],char:my_matrix[8][1]},
		{matrix:my_matrix[9][0],char:my_matrix[9][1]},
	],
	loop_function:function(){
		if (jsPsych.data.getLastTimelineData().select('correct').values.some(elem=>elem=='false')){
			return true;
		}
	},
	on_timeline_finish:function(){
		again=-1;//重置是否重复的变量值，用于在CNI环节确定介绍部分是否重复！
	}
}

//独裁者范式部分                                                               //（4）独裁者范式分配共同金额，操纵公平感，自变量
let dictator_game={
	type:jsPsychHtmlKeyboardResponse,
	choices:'ALL_KEYS',
	timeline:[
		{
			stimulus:'<div ><div>由于双方都已完成环节一，已自动进入环节二，正在计算成绩，将根据回答时间快慢决定谁是分配者，谁是接受者。</div><div class="loading-dots"><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span></div></div>',
			stimulus_duration:5000,
			trial_duration:5000,
			choices:''
		},
		{
			stimulus:'由于你的成绩不如队友，已分配你为接受者，对方为分配者！按任意键对方正式进入分配环节！',
			stimulus_duration:null
		},
		{
			stimulus:'<p>你需要等待对方分配积分<div class="loading-dots"><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span></div></p>',
			stimulus_duration:7000,
			trial_duration:7000,
			choices:''
		},
		{
			stimulus:'<div class="title">你的队友给自己分配的积分是：18!</div>'+'<div class="title">你的队友给你分配的积分是：2!</div>'+'<div class="styled-button">按任意键进入最后一个环节</div>',
			stimulus_duration:null
		}
	]
}

/*（5）CNI模型，道德判断的实验材料，类似于问卷，此处使用的是html插件，但是只能显示一个屏幕，经典范式使用的是两个屏幕，因此使用了same-different-html插件                             
// let CNI_trial={
	// type:jsPsychHtmlKeyboardResponse,
	// choices:['f','j'],
	// timeline:[
		// {
			// stimulus:function(){
				// let CNIcontent=`<div class="story">${jsPsych.timelineVariable('story')}</div>`;
				// CNIcontent+=`<div class="question">${jsPsych.timelineVariable('question')}</div>`;
				// return CNIcontent;
				
			// },
		// }
	// ],
	// CNI实验材料，由于浏览器无法自由读取本地文件，因此只好将文字全写入js中
	// timeline_variables:CNI_material,	
// }
*/


var introduction_CNI='<div class="introductioncss"><div class="title">任务三介绍</div><div>你和同伴都已完成额外积分任务，最后进行一个情境任务，你需要将自己代入到故事情境中去，总共48个情境故事（仅随机抽取六个供查看）。<br/>你需要判断<span style="color:red; size:30px;">执行某一行为</span>是否可接受？按F键表示可接受，J键不可接受</div><div></div><div class="styled-button">按空格键正式进入判断任务！！！</div></div>';
var CNI_trial={                                                               //（5）CNI模型，道德判断，因变量
	timeline:[
		{
			timeline:[                                                         //此处嵌套一个timeline用于介绍CNI模型的要求，由于要使用conditional_function，哪怕只有一个试次也要使用timeline
				{
				type:jsPsychHtmlKeyboardResponse,
				stimulus:introduction_CNI,
				choices:' '
				}
			],
			conditional_function:function(){
				again++;
				return again==0;                                           //只显示一次情境故事任务介绍
			},
		},
		{
			type:jsPsychSameDifferentHtml,
			first_stim_duration:-100,
			second_stim_duration:-100,
			gap_duration:200,
			prompt:'<div class="prompt"><button class="styled-button">F</button><button class="styled-button">J</button></div>',
			same_key: 'f',
			different_key: 'j',
			answer: 'different',
			stimuli:function(){ //直接使用的话会直接显示[object][object]，使用函数返回的是html字符串
				let story=`<div class="story-box">${jsPsych.timelineVariable('story')}</div>`;
				let question=`<div class="question-box">${jsPsych.timelineVariable('question')}</div>`;
				return [story,question];
				},		
			},
	],
	//CNI实验材料，由于浏览器无法自由读取本地文件，因此只好将文字全写入js中
	timeline_variables:CNI_material,	
	sample:{                                                                   //仅抽取六个随机顺序作为样例供老师查看
		type:'without-replacement',
		size:6
	}																		
	
}

let save_trial={                                                              //（6）保存数据部分
	type:jsPsychHtmlKeyboardResponse,
	choices:'s',
	stimulus:"<div class='title'>实验结束，请呼叫主试!!!<br/>（实际为按S键保存实验数据）</div>",
	on_finish:function(){jsPsych.data.get().localSave('csv','participant_number.csv');}                       //用于收集数据
}



// jsPsych.run([save_trial]);
jsPsych.run([introduction_trial,practice_trial,charmatrix_trial,dictator_game,CNI_trial,save_trial]);
                                 
