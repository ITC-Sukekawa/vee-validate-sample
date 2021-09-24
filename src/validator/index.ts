import Vue from 'vue'

/**
 * ------------------------------------------------------------
 * Vue I18n
 * ------------------------------------------------------------
 */
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja',
  messages: require('@/assets/lang/ja/message.json'),
})

/**
 * ------------------------------------------------------------
 * Vee validate
 * ------------------------------------------------------------
 */
// ライブラリインポート
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
// デフォルトルールインポート (必要なものだけ)
import { required, email } from 'vee-validate/dist/rules'

/**
 * 使用するルールを定義
 */
extend('required', {
  ...required,
  message: i18n.t('validator.rules.required') as string,
})

extend('email', {
  ...email,
  message: i18n.t('validator.rules.email') as string,
})

/**
 * カスタムルール
 */
// NG ワード (ホゲホゲ, フガフガ, ピヨピヨ, ブロリー)
extend('ng_word', {
  message: i18n.t('validator.rules.ngWord') as string,
  validate(value: string) {
    const ngWords = [
      i18n.t('validator.ngWords.broly'),
      i18n.t('validator.ngWords.fugafuga'),
      i18n.t('validator.ngWords.hogehoge'),
      i18n.t('validator.ngWords.piyopiyo'),
    ] as string[]
    if (ngWords.some((ngWord) => value.includes(ngWord))) {
      return false
    }
    return true
  },
})

// グローバルコンポーネントを登録
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
