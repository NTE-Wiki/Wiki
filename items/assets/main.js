const CSV_FILES = {
    '道具礼物': './assets/db/props_is_gift.csv',
    '道具非礼物': './assets/db/props_not_gift.csv',
    '特殊道具': './assets/db/props_is_spec.csv',
    '家具礼物': './assets/db/home_is_gift.csv',
    '家具非礼物': './assets/db/home_not_gift.csv',
    '食物礼物': './assets/db/foods_is_gift.csv',
    '食物非礼物': './assets/db/foods_not_gift.csv',
    '物料': './assets/db/pre_food.csv',
    '重要物品': './assets/db/vip_items.csv',
    '其他背包': './assets/db/spec_bags.csv',
};

const CATEGORY_MAPPING = {
    '全部': ['道具礼物', '道具非礼物', '食物礼物', '食物非礼物', '家具礼物', '家具非礼物', '物料', '重要物品'],
    '礼物': ['道具礼物', '食物礼物', '家具礼物'],
    '道具': ['道具礼物', '道具非礼物'],
    '家装': ['家具礼物', '家具非礼物'],
    '食物': ['食物礼物', '食物非礼物'],
    '物料': ['物料'],
    '重要物品': ['重要物品'],
    '特殊': ['特殊道具'],
    '其他背包': ['其他背包']
};

const FILTER_CONFIGS = {
    '全部': [
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '类别', name: '类别', type: 'tags', options: ['礼物', '道具', '食物', '家装', '物料', '重要物品'] },
        { id: '标签', name: '其他', type: 'tags', options: ['可购买', '可拾取', '可偷取', '特殊获取', '不可再生', '唯一'] }
    ],
    '礼物': [
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '类别', name: '类别', type: 'tags', options: ['道具', '食物', '家装'] },
        { id: '好感', name: '好感', type: 'tags', options: ['50', '100', '200', '300', '400', '2000'] },
        { id: '好感翻倍角色', name: '好感翻倍角色', type: 'character_select' },
        { id: '标签', name: '其他', type: 'tags', options: ['可购买', '可拾取', '可偷取', '特殊获取', '不可再生'] }
    ],
    '家装': [
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['灰', '绿', '蓝', '紫', '金'] },
        { id: '规格', name: '规格', type: 'size_tags', options: ['S', 'M', 'L'] },
        { id: '类型', name: '类型', type: 'tags', options: ['家具', '园艺', '养鱼', '墙壁', '装饰', '手办', '唱片机', '一咖舍'] },
        { id: '子类型', name: '子类型', type: 'sub_tags', 
            options: {
                '家具': ['沙发', '椅子', '床', '桌子', '柜子', '屏风', '地毯'],
                '园艺': ['花盆', '花瓶', '花架', '盆栽', '花艺', '耕种'],
                '唱片机': [],
                '养鱼': ['鱼缸', '鱼缸造景'],
                '墙壁': ['画', '海报', '墙饰', '贴纸'],
                '装饰': ['大手办', '摆件', '工艺品','乐器', '书', '灯饰', '家庭休闲'],
                '手办': ['手办','大手办'],
                '一咖舍': ['桌子', '画', '海报', '贴纸', '手办']
            }
        },
        { id: '家装系列', name: '家装系列', type: 'home_series_select' },
        { id: '角色特殊互动', name: '角色特殊互动', type: 'character_select' },
        { id: '标签', name: '其他', type: 'tags', options: ['可购买', '可拾取', '可偷取', '不可购买', '特殊获取', '可互动'] }
    ],
    '食物': [
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '类型', name: '类型', type: 'tags', options: ['复活', '生命', '防御力', '攻击力', '暴击', '体力'] },
        { id: '子类型', name: '子类型', type: 'tags', 
            options: {
                '复活': ['百分比', '数值'],
                '生命': ['百分比', '数值', '一次性', '持续', '混合', '复活'],
                '防御力': [],
                '攻击力': [],
                '暴击': ['暴击伤害', '暴击率'],
                '体力': ['回复提速', '消耗降低'],
            }
        },
        { id: '食物系列', name: '食物系列', type: 'food_series_select' },
        { id: '标签', name: '其他', type: 'tags', options: ['可购买', '可拾取', '可偷取', '特殊获取', '不可再生', '唯一', '单体', '全队'] }
    ],
    '物料': [
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '类别', name: '类别', type: 'tags', options: ['肉类', '蔬菜', '水果', '水产', '调味', '加工品'] },
        { id: '标签', name: '其他', type: 'tags', options: ['可购买', '可拾取'] }
    ],
    '道具': [

        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '类型', name: '类型', type: 'tags', options: ['重要道具', '鱼类道具', '养成材料', '异象家具材料', '代币', '礼物', '其他'] },
        { id: '子类型', name: '子类型', type: 'sub_tags', 
            options: {
                '重要道具': [],
                '鱼类道具': ['养鱼道具', '捕鱼道具'],
                '养成材料': ['经验', '角色突破', '异能升级', '弧盘突破', '空幕卡带', '自选箱', '其他'],
                '异象家具材料': [],
                '代币': ['代币', '兑换券', '折扣券'],
                '礼物': [],
                '其他': ['自选箱','遗失物', '活力', '好感', '角色获取'],
            }
        },
        { id: '适用角色', name: '适用角色', type: 'character_select' },
        { id: '标签', name: '其他', type: 'tags', options: ['可购买', '可拾取', '可刷取', '特殊获取', '不可再生','唯一'] }
    ],
    '重要物品': [
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '类型', name: '类型', type: 'tags', options: ['便捷条', '功能解锁', '任务道具', '玩法', '养成材料', '其他'] },
        { id: '子类型', name: '子类型', type: 'tags', 
            options: {
                '便捷条': ['车钥匙', '快捷道具'],
                '任务道具': ['可保留', '不可保留', '任务奖励'],
                '功能解锁': ['任务奖励', '羁遇奖励', '麻将装扮', '钓鱼用具'],
                '玩法': ['抽卡', '盲盒', '代币', '监狱', '粉爪大劫案'],
                '养成材料': ['角色', '其他养成'],
            }
        },
        { id: '标签', name: '其他', type: 'tags', options: ['可购买', '特殊获取', '唯一', '可拾取', '消耗品', '不可保留'] }
    ],
    '特殊': [
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '类型', name: '类型', type: 'tags', options: ['货币', '游戏设计', '角色', '载具', '社交', '其他'] },
        { id: '子类型', name: '子类型', type: 'sub_tags', 
            options: {
                '货币': ['货币', '永久', '活动代币'],
                '角色': ['角色卡', '服装', '常驻角色', '限定角色'],
                '载具': ['涂装', '引擎', '车体', '其他'],
                '社交': ['头像', '名片', '头像框', '称号', '角色', '其他'],
                '游戏设计': ['活力类', '经验类', '养成材料', '奖励预览', '其他'],
            }
        },
        { id: '适用角色', name: '适用角色', type: 'character_select' },
        { id: '标签', name: '其他', type: 'tags', options: ['不可再生', '唯一', '常驻', '限时'] }
    ],
    '其他背包': [
        { id: '所属背包', name: '所属背包', type: 'bags_series_select' },
        { id: '稀有度', name: '稀有度', type: 'rarity_tags', options: ['绿', '蓝', '紫', '金'] },
        { id: '子类型', name: '子类型', type: 'sub_tags', 
            options: {
                '海上钓客': ['货币', '积分', '淡水鱼', '海水鱼' , '可饲养', '其他'],
                '九百九十九夜': ['货币', '积分', '武器', '上装', '下装', '鞋子', '护符', '采集物', '其他'],
                '粉爪大劫案': ['货币', '积分', '门禁卡', '拾取物'],
                '噩梦缠身': ['门禁', '便捷条', '线索'],
                '即刻落槌': ['货币', '积分', '仪器', '拍品'],
            }
        },
        { id: '标签', name: '其他', type: 'tags', options: ['货币', '积分', '常驻', '限时','不可再生', '唯一', '每局重置', '局外保留', '其他'] }
    ]
};

let allDatabaseData = {};
let characterList = new Set();
let favoriteItemCharacters = new Set();
let homeseriesList = new Set();
let homeseriesItem = new Set();
let foodseriesList = new Set();
let foodseriesItem = new Set();
let bagsseriesList = new Set();
let bagsseriesItem = new Set();
let currentMasterTab = '全部';
let searchQuery = '';
let fallbackImg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><rect width='50' height='50' fill='%23e0e0e0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='10' fill='%23888888'>No Img</text></svg>";
let activeFilters = {};
let sortMode = 0; // 0: 默认, 1: 价格升序, 2: 价格降序

window.addEventListener('DOMContentLoaded', async () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggleBtn').innerHTML = '☀️ 切换日间';
    }

    const savedFilter = localStorage.getItem('filter') || 'union';
    if (savedFilter === 'inter') {
        document.documentElement.setAttribute('data-filter', 'inter');
        document.getElementById('filterToggleBtn').innerHTML = '同组筛选: 满足全部';
    } else {
        document.documentElement.setAttribute('data-filter', 'union');
        document.getElementById('filterToggleBtn').innerHTML = '同组筛选: 满足任意';
    }
    
    // 获取 CSV 并自动根据服务器更新状态刷缓存
    const promises = Object.entries(CSV_FILES).map(async ([key, filePath]) => {
        try {
            // 1. 使用 fetch 发送协商请求（文件更新了才下新的，没变就用 304 本地缓存）
            const response = await fetch(filePath, {
                cache: 'no-cache'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const csvText = await response.text();

            // 2. 将拿到（或缓存）的文本内容传给 Papa.parse
            return new Promise((resolve) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: 'greedy', // 彻底跳过只包含空格/逗号的无效空行
                    
                    // 清洗表头：去除 BOM 头以及首尾不可见空格
                    transformHeader: (header) => {
                        return header.replace(/^\ufeff/, '').trim();
                    },

                    complete: (results) => {
                        // 数据二次清洗：去除字段值首尾空格 & 过滤无效行
                        const cleanData = results.data.map(row => {
                            const cleanRow = {};
                            Object.keys(row).forEach(k => {
                                const cleanKey = k.trim();
                                const val = row[k];
                                cleanRow[cleanKey] = typeof val === 'string' ? val.trim() : val;
                            });
                            return cleanRow;
                        }).filter(row => {
                            // 必须包含有效的名称字段，才保留该条记录
                            return row['名称'] && row['名称'] !== '' && row['名称'] !== 'undefined';
                        });

                        allDatabaseData[key] = cleanData;
                        resolve();
                    },

                    error: () => {
                        allDatabaseData[key] = [];
                        resolve();
                    }
                });
            });
        } catch (error) {
            console.error(`加载 CSV [${key}] 失败:`, error);
            allDatabaseData[key] = [];
        }
    });

    await Promise.all(promises);
    extractCharacters();
    extracthomeSeries();
    extractfoodSeries();
    extractbagsSeries()
    switchMasterTab('全部');
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const btn = document.getElementById('themeToggleBtn');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙 切换夜间';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️ 切换日间';
    }
}

// 切换按钮触发函数
function toggleFilter() {
    const currentFilter = document.documentElement.getAttribute('data-filter');
    const btn = document.getElementById('filterToggleBtn');

    if (currentFilter === 'inter') {
        // 当前是交集 -> 切换为并集
        document.documentElement.setAttribute('data-filter', 'union');
        localStorage.setItem('filter', 'union');
        btn.innerHTML = '同组筛选: 满足任意';
    } else {
        // 当前是并集 -> 切换为交集
        document.documentElement.setAttribute('data-filter', 'inter');
        localStorage.setItem('filter', 'inter');
        btn.innerHTML = '同组筛选: 满足全部';
    }

    // 触发重新筛选与渲染
    applyFilterLogic();
}


function toggleSort() {
    sortMode = (sortMode + 1) % 3;
    const btn = document.getElementById('sortBtn');
    if (sortMode === 0) {
        btn.innerHTML = '📊 价格排序: 默认';
    } else if (sortMode === 1) {
        btn.innerHTML = '📈 价格排序: 升序';
    } else if (sortMode === 2) {
        btn.innerHTML = '📉 价格排序: 降序';
    }
    applyFilterLogic();
}

function splitCellValues(val) {
    if (!val || val === 'null') return [];
    return val.toString()
        .split(/[\r\n、|]+/) // 换行符、|
        .map(s => s.trim())
        .filter(Boolean);
}

function extractCharacters() {
    Object.values(allDatabaseData).flat().forEach(row => {
        ['偏好角色', '角色特殊互动'].forEach(col => {
            splitCellValues(row[col]).forEach(c => characterList.add(c));
        });
        splitCellValues(row['好感翻倍角色']).forEach(c => favoriteItemCharacters.add(c));
    });
}

function extractfoodSeries() {
    Object.values(allDatabaseData).flat().forEach(row => {
        splitCellValues(row['食物系列']).forEach(s => foodseriesItem.add(s));
    });
}

function extracthomeSeries() {
    Object.values(allDatabaseData).flat().forEach(row => {
        splitCellValues(row['家装系列']).forEach(s => homeseriesItem.add(s));
    });
}

function extractbagsSeries() {
    Object.values(allDatabaseData).flat().forEach(row => {
        splitCellValues(row['所属背包']).forEach(s => bagsseriesItem.add(s));
    });
}

function switchMasterTab(tabName) {
    currentMasterTab = tabName;
    activeFilters = {};
    document.querySelectorAll('#masterTabs .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.trim() === tabName);
    });
    renderDynamicFilters();
    applyFilterLogic();
}

function renderDynamicFilters() {
    const container = document.getElementById('dynamicFilters');
    container.innerHTML = '';
    const configs = FILTER_CONFIGS[currentMasterTab] || [];

    configs.forEach(group => {
        // 💡 1. 级联核心：处理子类型逻辑
        let currentOptions = group.options;

        if (group.name === '子类型'| group.name === '加成类型') {
            const selectedMainTypes = activeFilters['类型'] || [];
            const selectedMainTypes2 = activeFilters['所属背包'] || [];
            
            // 如果未勾选任何“类型”，直接不渲染子类型这一行
            if (selectedMainTypes.length === 0 && selectedMainTypes2.length === 0) return;

            // 根据选中的类型汇总所有可用的子类型（支持在“类型”中多选）
            let matchedOptions = [];
            selectedMainTypes.forEach(t => {
                if (group.options[t]) matchedOptions.push(...group.options[t]);
            });
            selectedMainTypes2.forEach(t => {
                if (group.options[t]) matchedOptions.push(...group.options[t]);
            });


            // 去重
            currentOptions = [...new Set(matchedOptions)];

            // 如果该类型下没有配置子类型，跳过渲染
            if (currentOptions.length === 0) return;
        }

        // 2. DOM 节点构建
        const groupEl = document.createElement('div');
        groupEl.className = 'filter-group';

        const title = document.createElement('div');
        title.className = 'filter-title';
        title.innerText = group.name;
        groupEl.appendChild(title);

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags-container';

        // 3. 标签类型按钮渲染
        if (group.type === 'tags' || group.type === 'rarity_tags' || group.type === 'size_tags' || group.type === 'sub_tags') {
            currentOptions.forEach(opt => {
                const btn = document.createElement('button');
                
                // 判断当前 opt 是否已经被选中，补齐 active 样式类
                const isSelected = activeFilters[group.id] && activeFilters[group.id].includes(opt);
                btn.className = `tag-btn ${isSelected ? 'active' : ''}`;
                
                btn.innerHTML = group.type === 'rarity_tags' ? `<span class="dot dot-${opt}"></span> ${opt}` : opt;
                
                // 绑定点击事件，将当前按钮 DOM 传入
                btn.onclick = () => toggleTag(group.id, opt, btn);
                tagsContainer.appendChild(btn);
            });
        } else if (group.type === 'character_select') {
            const select = document.createElement('select');
            select.className = 'character-select';
            let optionsSource = (group.id === '好感翻倍角色') ? favoriteItemCharacters : characterList;
            select.innerHTML = `<option value="">未选择角色</option>` + 
                Array.from(optionsSource).map(c => `<option value="${c}" ${activeFilters[group.id] && activeFilters[group.id][0] === c ? 'selected' : ''}>${c}</option>`).join('');
            select.onchange = (e) => {
                if (e.target.value) activeFilters[group.id] = [e.target.value];
                else delete activeFilters[group.id];
                applyFilterLogic();
            };
            tagsContainer.appendChild(select);
        } else if (group.type === 'food_series_select') {
            const select = document.createElement('select');
            select.className = 'food-series-select';
            let optionsSource = (group.id === '食物系列') ? foodseriesItem : foodseriesList;
            select.innerHTML = `<option value="">未选择系列</option>` + 
                Array.from(optionsSource).map(c => `<option value="${c}" ${activeFilters[group.id] && activeFilters[group.id][0] === c ? 'selected' : ''}>${c}</option>`).join('');
            select.onchange = (e) => {
                if (e.target.value) activeFilters[group.id] = [e.target.value];
                else delete activeFilters[group.id];
                applyFilterLogic();
            };
            tagsContainer.appendChild(select);
        } else if (group.type === 'home_series_select') {
            const select = document.createElement('select');
            select.className = 'home-series-select';
            let optionsSource = (group.id === '家装系列') ? homeseriesItem : homeseriesList;
            select.innerHTML = `<option value="">未选择系列</option>` + 
                Array.from(optionsSource).map(c => `<option value="${c}" ${activeFilters[group.id] && activeFilters[group.id][0] === c ? 'selected' : ''}>${c}</option>`).join('');
            select.onchange = (e) => {
                if (e.target.value) activeFilters[group.id] = [e.target.value];
                else delete activeFilters[group.id];
                applyFilterLogic();
            };
            tagsContainer.appendChild(select);
        } else if (group.type === 'bags_series_select') {
            const select = document.createElement('select');
            select.className = 'bags-series-select';
            let optionsSource = (group.id === '所属背包') ? bagsseriesItem : bagsseriesList;
            select.innerHTML = `<option value="">未选择所属背包</option>` + 
                Array.from(optionsSource).map(c => `<option value="${c}" ${activeFilters[group.id] && activeFilters[group.id][0] === c ? 'selected' : ''}>${c}</option>`).join('');
            
            select.onchange = (e) => {
                const value = e.target.value;
                
                // 更新 activeFilters（单选，直接覆盖）
                if (value) {
                    activeFilters[group.id] = [value];
                } else {
                    delete activeFilters[group.id];
                }
                
                // 联动刷新子类型
                if (group.id === '所属背包') {
                    cleanInvalidSubTypes();
                    renderDynamicFilters();
                }
                
                applyFilterLogic();
            };
            tagsContainer.appendChild(select);
        }
        groupEl.appendChild(tagsContainer);
        container.appendChild(groupEl);
    });
}

function toggleTag(groupId, val, btn) {
    if (!activeFilters[groupId]) activeFilters[groupId] = [];
    const idx = activeFilters[groupId].indexOf(val);
    if (idx > -1) {
        activeFilters[groupId].splice(idx, 1);
        if (!activeFilters[groupId].length) delete activeFilters[groupId];
    } else {
        activeFilters[groupId].push(val);
    }

    // 💡 核心改动：点击“类型”时，处理子类型联动
    if (groupId === '类型') {
        cleanInvalidSubTypes();      // 清理原先选中但现在无效的子类型
        renderDynamicFilters();     // 重新渲染筛选区域（内部会自动重新给 active 按钮加上 active 类）
    } else {
        // 普通标签点击，直接切换当前按钮高亮样式
        btn.classList.toggle('active');
    }
    applyFilterLogic();
}

function cleanInvalidSubTypes() {
    if (!activeFilters['子类型']) return;

    const selectedMainTypes = activeFilters['类型'] || [];
    const selectedMainTypes2 = activeFilters['所属背包'] || [];
    const subConfig = (FILTER_CONFIGS[currentMasterTab] || []).find(g => g.id === '子类型');

    // 如果主类型被全部取消选择，或者找不到子类型配置，清空已选子类型
    if (!subConfig || (selectedMainTypes.length === 0 && selectedMainTypes2.length === 0) ) {
        delete activeFilters['子类型'];
        return;
    }

    // 汇总当前所有合法子类型选项
    let validSubOptions = [];
    selectedMainTypes.forEach(t => {
        if (subConfig.options[t]) validSubOptions.push(...subConfig.options[t]);
    });
    selectedMainTypes2.forEach(t => {
        if (subConfig.options[t]) validSubOptions.push(...subConfig.options[t]);
    });

    // 过滤掉不在合法池中的已选子类型
    activeFilters['子类型'] = activeFilters['子类型'].filter(sub => validSubOptions.includes(sub));
    if (!activeFilters['子类型'].length) delete activeFilters['子类型'];
}

function applyFilterLogic() {
    let currentData = [];
    if (currentMasterTab === '礼物') {
        const giftSources = ['道具礼物', '食物礼物'];
        giftSources.forEach(key => {
            if (allDatabaseData[key]) {
                currentData = currentData.concat(allDatabaseData[key]);
            }
        });
        if (allDatabaseData['家具礼物']) {
            currentData = currentData.concat(allDatabaseData['家具礼物']);
        }
    } else {
        const subCsvKeys = CATEGORY_MAPPING[currentMasterTab] || [];
        subCsvKeys.forEach(key => {
            if (allDatabaseData[key]) {
                currentData = currentData.concat(allDatabaseData[key]);
            }
        });
    }

    // 💡 获取当前的同类标签筛选模式 ('inter' 为交集/AND，否则为并集/OR)
    const isInterMode = document.documentElement.getAttribute('data-filter') === 'inter';
    
    let filtered = currentData.filter(row => {
        // 1. 搜索框筛选
        if (searchQuery) {
            const match = Object.values(row).some(v => v && v.toString().toLowerCase().includes(searchQuery));
            if (!match) return false;
        }

        // 2. 标签组筛选
        for (let [groupId, valList] of Object.entries(activeFilters)) {
            // 如果该筛选组没有选择任何值，跳过
            if (!valList || valList.length === 0) continue;

            const cellValues = splitCellValues(row[groupId] || row['其他'] || row['标签'] || row['类型']);
            
            // 💡 核心修改点：根据模式决定同组内是“同时满足”还是“满足任意”
            const match = isInterMode 
                ? valList.every(v => cellValues.includes(v))  // 交集模式 (AND): 选中的值必须全部存在
                : valList.some(v => cellValues.includes(v));   // 并集模式 (OR):  选中的值只需满足一个

            if (!match) return false;
        }
        return true;
    });

    // 3. 排序逻辑
    if (sortMode !== 0) {
        filtered.sort((a, b) => {
            let priceA = parseFloat(a['价格']);
            let priceB = parseFloat(b['价格']);
            
            let hasA = !isNaN(priceA);
            let hasB = !isNaN(priceB);
            if (!hasA && !hasB) return 0;
            if (!hasA) return 1;
            if (!hasB) return -1;

            return sortMode === 1 ? priceA - priceB : priceB - priceA;
        });
    }

    // 4. 渲染与状态更新
    renderCards(filtered);
    
    let count = 0;
    Object.values(activeFilters).forEach(a => count += a.length);
    document.getElementById('clearBtn').innerText = `🗑️ 清除 ${count} 个过滤器`;
    document.getElementById('statusText').innerText = `【${currentMasterTab}】共有 ${filtered.length} 项`;
}
function renderCards(data) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    const formatAttr = (label, value, prefix = '') => {
        if (!value || value === 'null' || value === 'undefined') return '';
        return `<div><b>${label}:</b> ${prefix}${value}</div>`;
    };

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.onclick = () => openModal(item);

        const imgPath = `./assets/images/${item['pics']}.png`;

        let attrHtml = '';
        if (currentMasterTab === '礼物') {
            attrHtml = formatAttr('价格', item['价格']) + formatAttr('好感', item['好感'], '+');
        } else if (currentMasterTab === '家装') {
            attrHtml = formatAttr('价格', item['价格']) + formatAttr('舒适度', item['舒适度']) + formatAttr('收藏值', item['收藏值']);
        } else {
            attrHtml = formatAttr('价格', item['价格']);
        }

        const itemName = item['名称'] || '未命名';
        

        // 注意这里的 <span class="item-name-inner"> 包裹
        card.innerHTML = `
            <img class="item-img" src="${imgPath}" onerror="this.onerror=null; this.src='${fallbackImg}';">
            <div class="item-name">
                <span class="item-name-inner">${itemName}</span>
            </div>
            <div class="item-attr">
                ${attrHtml}
            </div>
        `;

        container.appendChild(card);

        // 💡 动态检测并计算精确滚动距离
        const nameContainer = card.querySelector('.item-name');
        const nameInner = card.querySelector('.item-name-inner');

        const overflowWidth = nameInner.offsetWidth - nameContainer.clientWidth;
        
        // 如果文字宽度超过了外层容器，开启滚动并传入精准偏移量
        if (overflowWidth > 0) {
            // 计算需要往左滚动的像素值 (留 4px 余量)
            nameInner.style.setProperty('--scroll-offset', `-${overflowWidth + 4}px`);
            nameInner.classList.add('scroll');
        }
    });
}

function openModal(item) {
    const imgPath = `./assets/images/${item['pics']}.png`;
    document.getElementById('modalImg').src = imgPath;
    document.getElementById('modalTitle').innerText = item['名称'] || '未命名';
    
    document.getElementById('modalUsage').innerText = item['用途'] || item['属性'] || '暂无';
    document.getElementById('modalIntro').innerText = item['介绍'] || item['描述'] || '暂无';
    document.getElementById('modalSource').innerText = item['获取途径'] || item['标签'] || item['其他'] || '暂无';

    document.getElementById('detailModal').classList.add('active');
}

function closeModal() {
    document.getElementById('detailModal').classList.remove('active');
}

function closeModalOnOverlay(event) {
    if (event.target.id === 'detailModal') {
        closeModal();
    }
}

function resetFilters() {
    activeFilters = {};
    searchQuery = '';
    sortMode = 0;
    document.getElementById('searchInput').value = '';
    document.getElementById('sortBtn').innerHTML = '📊 价格排序: 默认';
    renderDynamicFilters();
    applyFilterLogic();
}

document.getElementById('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilterLogic();
});