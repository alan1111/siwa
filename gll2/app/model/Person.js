Ext.define('MyDemo.model.Person', {
    extend: 'MyDemo.model.Base',
    fields: ['firstName', 'lastName', 'age', 'favoriteColor'],
    statics: {
        generateData: (function() {//generate���key�����ֵ��һ����ִ�к���
            var lasts = ['Jones', 'Smith', 'Lee', 'Wilson', 'Black', 'Williams', 'Lewis', 'Johnson', 'Foot', 'Little', 'Vee', 'Train', 'Hot', 'Mutt'],
                firsts = ['Fred', 'Julie', 'Bill', 'Ted', 'Jack', 'John', 'Mark', 'Mike', 'Chris', 'Bob', 'Travis', 'Kelly', 'Sara'],
                colors = ['Red', 'Green', 'Blue'],
                currentYear = (new Date()).getFullYear();//��ȡ��

            function getRandom(array) {//������ȡ���һ����ok
                var index = Ext.Number.randomInt(0, array.length - 1);
                return array[index];
            }

            function getName(seen) {//����һ��û�г��ֹ�������
                var name = {
                    first: getRandom(firsts),
                    last: getRandom(lasts)
                };

                if (seen[name.first + name.last]) {//�����ˣ�����
                    return getName(seen);//�ݹ�
                } else {
                    return name;
                }
            }

            function getDate() {//����������ڣ�ok
                var y = Ext.Number.randomInt(currentYear - 5, currentYear),
                    m = Ext.Number.randomInt(0, 11),//0Ϊ1��
                    maxDays = Ext.Date.getDaysInMonth(new Date(y, m, 1));//����Ϊ�����գ���ȡ�Ǹ������µ��������
                d = Ext.Number.randomInt(1, maxDays);//������������������һ������

                return new Date(y, m, d);//���������������ڣ�����������
            }

            function getKey() {//�������һ����λ�ַ���ok
                var chars = '',
                    i;
                for (i = 0; i < 5; ++i) {
                    chars += String.fromCharCode(Ext.Number.randomInt(97, 122));
                    //�������һ��char��ĸ����ӵ�chars��
                }
                return chars;
            }

            return function(options) {//�����Ǹ�����//includeAccounts: true, total: 5
                options = options || {};//���ص�һ����Чֵ

                var out = [],
                    adults = options.adults,//un
                    children = options.children,//un
                    total = options.total,//5
                    includeAccounts = options.includeAccounts,//true
                    seenNames = {},
                    adultsUndef = adults === undefined,//true��false
                    childrenUndef = children === undefined,//true��false
                    accountIdCounter = 0,
                    name, o, accounts, i, j, len;

                if (!adultsUndef && !childrenUndef) {//�տ�ʼfalse����
                    total = adults + children;
                } else {
                    // We rely on total now
                    total = total || 15;//5
                    if (adultsUndef && childrenUndef) {//true
                        adults = Ext.Number.randomInt(Math.floor(total * 0.25), Math.floor(total * 0.75));//1~3
                        children = total - adults;//2~4
                    } else if (adultsUndef) {
                        adults = total - children;
                    } else {
                        children = total - adults;
                    }
                }

                for (i = 0; i < total; ++i) {//5
                    name = getName(seenNames);//����һ��û���ֵ����֣�������û����seenNames�������
                    o = {//�½�һ��o
                        id: i + 1,
                        firstName: name.first,
                        lastName: name.last,
                        age: i >= adults ? Ext.Number.randomInt(0, 17) : Ext.Number.randomInt(18, 100),
                        favoriteColor: getRandom(colors)
                    };

                    if (includeAccounts) {//�Ƿ�����˻������������ι�����
                        accounts = [];
                        len = Ext.Number.randomInt(1, 5);//��������˻�����
                        for (j = 0; j < len; ++j) {
                            accounts.push({
                                id: ++accountIdCounter,
                                created: getDate(),
                                accountKey: getKey(),
                                personId: o.id
                            });
                        }
                        o.accounts = accounts;
                    }
                    out.push(o);
                }
                return out;
            };
        })()
    }
});