<template>
  <v-container>
    <!-- お問い合わせ -->
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="my-3">{{ $t('views.home.inquiry') }}</h2>
      </v-col>
    </v-row>
    <v-row class="text-center" justify="center">
      <v-col cols="4">
        <!-- フォーム (vee-validate 使用) -->
        <!-- form 全体を ValidationObserver で囲む -->
        <validation-observer v-slot="{ invalid }">
          <form v-on:submit.prevent="submit">
            <!-- お名前 -->
            <!-- 対象の入力エリアを ValidationProvider で囲む -->
            <validation-provider
              v-slot="{ errors }"
              v-bind:name="$t('validator.fields.name')"
              rules="required"
            >
              <!-- input text -->
              <v-text-field
                v-model="name"
                v-bind:error-messages="errors"
                v-bind:label="$t('validator.fields.name')"
                required
              />
              <!-- Vuetify 以外で使用したい場合は以下のコメントアウトを解除 -->
              <!-- <p v-if="errors" class="red--text text-left">{{ errors[0] }}</p> -->
            </validation-provider>

            <!-- メールアドレス -->
            <validation-provider
              v-slot="{ errors }"
              v-bind:name="$t('validator.fields.email')"
              rules="required|email"
            >
              <!-- input text -->
              <v-text-field
                v-model="email"
                v-bind:error-messages="errors"
                v-bind:label="$t('validator.fields.email')"
                required
              />
              <!-- <p v-if="errors" class="red--text text-left">{{ errors[0] }}</p> -->
            </validation-provider>

            <!-- 会社名 -->
            <validation-provider
              v-slot="{ errors }"
              v-bind:name="$t('validator.fields.company')"
              rules="required"
            >
              <!-- input text -->
              <v-text-field
                v-model="company"
                v-bind:error-messages="errors"
                v-bind:label="$t('validator.fields.company')"
                required
              />
              <!-- <p v-if="errors" class="red--text text-left">{{ errors[0] }}</p> -->
            </validation-provider>

            <!-- お立場 -->
            <validation-provider
              v-slot="{ errors }"
              v-bind:name="$t('validator.fields.yourPosition')"
              rules="required"
            >
              <v-select
                v-model="yourPosition"
                v-bind:items="yourPositionItems"
                v-bind:error-messages="errors"
                v-bind:label="$t('validator.fields.yourPosition')"
                data-vv-name="select"
                required
              />
              <!-- <p v-if="errors" class="red--text text-left">{{ errors[0] }}</p> -->
            </validation-provider>

            <!-- お問い合わせ種別 -->
            <validation-provider
              v-slot="{ errors }"
              v-bind:name="$t('validator.fields.inquiryType')"
              rules="required"
            >
              <v-select
                v-model="inquiryType"
                v-bind:items="inquiryTypeItems"
                v-bind:error-messages="errors"
                v-bind:label="$t('validator.fields.inquiryType')"
                data-vv-name="select"
                required
              />
              <!-- <p v-if="errors" class="red--text text-left">{{ errors[0] }}</p> -->
            </validation-provider>

            <!-- お問い合わせ内容 -->
            <validation-provider
              v-slot="{ errors }"
              v-bind:name="$t('validator.fields.detailsOfYourInquiry')"
              rules="required"
            >
              <v-textarea
                v-model="detailsOfYourInquiry"
                v-bind:error-messages="errors"
                v-bind:label="$t('validator.fields.detailsOfYourInquiry')"
              />
              <!-- <p v-if="errors" class="red--text text-left">{{ errors[0] }}</p> -->
            </validation-provider>

            <v-btn class="mt-4" type="submit" v-bind:disabled="invalid">
              {{ $t('commons.sending') }}
            </v-btn>
          </form>
        </validation-observer>
      </v-col>
    </v-row>

    <!-- カスタムバリデーション -->
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="my-3 mt-5">{{ $t('views.home.customValidation') }}</h2>
      </v-col>
    </v-row>
    <v-row class="text-center" justify="center">
      <v-col cols="4">
        <validation-observer v-slot="{ invalid }">
          <form v-on:submit.prevent="submit">
            <!-- NG ワードテスト -->
            <validation-provider
              v-slot="{ errors }"
              v-bind:name="$t('validator.fields.ngWordTest')"
              rules="required|ng_word"
            >
              <!-- input text -->
              <v-text-field
                v-model="ngWordTest"
                v-bind:error-messages="errors"
                v-bind:label="$t('validator.fields.ngWordTest')"
                required
              />
              <!-- <p v-if="errors" class="red--text text-left">{{ errors[0] }}</p> -->
            </validation-provider>

            <v-btn class="mt-4" type="submit" v-bind:disabled="invalid">
              {{ $t('commons.confirmation') }}
            </v-btn>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="@/scripts/views/home.ts" />
