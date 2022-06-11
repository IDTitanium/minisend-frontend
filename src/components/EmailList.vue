<template>
    <div>
        <v-card outlined class="p-5">
            <v-card-title>
                All Emails
            </v-card-title>
            <v-data-table :sort-desc="true" :headers="headers" :items="allEmails" :search="search">
                <template v-slot:top>
                    <v-text-field
                    v-model="search"
                    label="Search"
                    class="mx-4"
                    ></v-text-field>
                </template>
                <template v-slot:[`item.subject`]="{item}">
                    <a @click.prevent="showDialog(item)">{{item.subject}}</a>
                </template>
                <template v-slot:[`item.actions`]="{item}">
                    <a @click.prevent="showDialog(item)">View Details</a>
                </template>
                <template v-slot:[`item.status`]="{item}">
                    <v-chip :class="{
                        posted: item.status == 'posted',
                        sent: item.status == 'sent',
                        failed: item.status == 'failed'    
                    }">{{item.status}}</v-chip>
                </template>
                <template v-slot:[`item.created_at`]="{item}">
                    {{formatDate(item.created_at)}}
                </template>
            </v-data-table>
            <v-dialog max-width="50%" v-model="showDetails">
                <v-card>
                    <v-card-title>{{itemDetails.subject}}</v-card-title>
                    <div class="p-5">

                    <v-row>
                        <v-col>
                            Sender: {{itemDetails.sender}}
                        </v-col>
                        <v-col>
                            Receiver: {{itemDetails.receiver}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            Date: {{formatDate(itemDetails.created_at) }}
                        </v-col>
                        <v-col>
                            Status: <v-chip :class="{
                                        posted: itemDetails.status == 'posted',
                                        sent: itemDetails.status == 'sent',
                                        failed: itemDetails.status == 'failed'    
                                    }">{{itemDetails.status}}</v-chip>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                           <v-card flat class="body-bg p-5 w-100">
                            <div v-html="itemDetails.html_body" v-if="itemDetails.html_body">
                            </div>
                            <div v-else>
                                {{itemDetails.body}}
                            </div>
                            </v-card> 
                        </v-col>
                        
                    </v-row>
                    <v-row>
                        <span class="p-5">
                            Number of attachments: {{itemAttachments? itemAttachments.length: 0}}
                        </span>
                    </v-row>
                    </div>
                </v-card>
            </v-dialog>
        </v-card>
    </div>
</template>

<script>
import { format } from 'date-fns'
export default {
    data() {
        return {
            headers: [
                {text: 'Subject', value: 'subject'},
                {text: 'Sender', value: 'sender'},
                {text: 'Receiver', value: 'receiver'},
                {text: 'Date posted', value: 'created_at'},
                {text: 'Status', value: 'status'},
                {text: 'Actions', value: 'actions', sortable: false}
            ],
            search: '',
            showDetails: false,
            itemDetails: {},
            itemAttachments: null,
        }
    },
    created() {
        this.fetchAllEmails()
    },
    methods: {
        fetchAllEmails() {
            this.$store.dispatch('fetchAllEmails')
        },
        formatDate(date) {
            if(!date) return null
            return format(new Date(date), "eee MM-dd-yyyy '@' h:mm bbbb")
        },
        showDialog(item) {
            this.showDetails = true
            this.itemDetails = item
            this.itemAttachments = item.attachments
        }
    },
    computed: {
        allEmails() {
            return this.$store.getters['getAllEmails']
        }
    }
}
</script>

<style scoped>
    .posted {
        background: purple !important;
        color: white !important;
    }

    .sent {
        background: palegreen !important;
    }

    .failed {
        background: orange !important;
    }

    .body-bg {
        background: lightgray !important;
    }
</style>